import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { afterEach, test } from 'node:test';
import { checkSite } from './check-site.mjs';

const site = 'https://example.test';
const person = { '@type': 'Person', '@id': `${site}/#person` };
const posting = { '@type': 'BlogPosting', author: { '@id': `${site}/#person` } };
const crumbs = { '@type': 'BreadcrumbList' };

const page = ({
  path,
  title = `Title of ${path}`,
  description = `Description of ${path}`,
  canonical = `${site}${path}`,
  body = '<h1>Heading</h1>',
  ld = [JSON.stringify(person)],
}) =>
  `<html><head><title>${title}</title><meta name="description" content="${description}">` +
  `<link rel="canonical" href="${canonical}">` +
  ld.map((b) => `<script type="application/ld+json">${b}</script>`).join('') +
  `</head><body>${body}</body></html>`;

const postLd = [person, posting, crumbs].map((b) => JSON.stringify(b));
const sitemap = (urls) => urls.map((u) => `<url><loc>${site}${u}</loc></url>`).join('');

// A valid site with pages of varied depth, including a long post slug.
const validFiles = () => ({
  'index.html': page({ path: '/' }),
  'writing/index.html': page({ path: '/writing/' }),
  'writing/a/index.html': page({ path: '/writing/a/', ld: postLd }),
  'writing/a/og.png': 'png',
  'writing/a.md': '# a',
  'writing/a-much-longer-slug/index.html': page({ path: '/writing/a-much-longer-slug/', ld: postLd }),
  'writing/a-much-longer-slug/og.png': 'png',
  'writing/a-much-longer-slug.md': '# b',
  'sitemap-index.xml': `<sitemap><loc>${site}/sitemap-0.xml</loc></sitemap>`,
  'sitemap-0.xml': sitemap(['/', '/writing/', '/writing/a/', '/writing/a-much-longer-slug/']),
  'rss.xml': `<link>${site}/writing/a/</link><link>${site}/writing/a-much-longer-slug/</link>`,
  'llms.txt': `${site}/writing/a/ ${site}/writing/a-much-longer-slug/`,
});

const roots = [];
const run = (files, sources = {}) => {
  const root = mkdtempSync(join(tmpdir(), 'check-site-'));
  roots.push(root);
  const write = (base, entries) => {
    mkdirSync(base, { recursive: true });
    for (const [path, content] of Object.entries(entries)) {
      mkdirSync(dirname(join(base, path)), { recursive: true });
      writeFileSync(join(base, path), content);
    }
  };
  write(join(root, 'dist'), files);
  write(join(root, 'posts'), sources);
  return checkSite({ dist: join(root, 'dist'), postsDir: join(root, 'posts'), site });
};
afterEach(() => roots.splice(0).forEach((root) => rmSync(root, { recursive: true, force: true })));

const assertRule = (errors, rule, fragment) => {
  const match = errors.find((e) => e.rule === rule && e.message.includes(fragment));
  assert.ok(match, `expected rule ${rule} "${fragment}", got ${JSON.stringify(errors)}`);
};

test('a valid site passes every rule', () => {
  assert.deepEqual(run(validFiles()), []);
});

test('a noindex page is exempt from page rules and the sitemap', () => {
  const files = validFiles();
  files['hidden/index.html'] = '<html><head><meta name="robots" content="noindex"></head></html>';
  assert.deepEqual(run(files), []);
});

test('rule 1: two h1s', () => {
  const files = validFiles();
  files['index.html'] = page({ path: '/', body: '<h1>A</h1><h1 class="b">B</h1>' });
  assertRule(run(files), 1, 'found 2');
});

test('rule 1: canonical pointing at another page', () => {
  const files = validFiles();
  files['writing/index.html'] = page({ path: '/writing/', canonical: `${site}/` });
  assertRule(run(files), 1, 'canonical');
});

test('rule 1: missing description', () => {
  const files = validFiles();
  files['index.html'] = page({ path: '/' }).replace(/<meta name="description"[^>]*>/, '');
  assertRule(run(files), 1, 'description');
});

test('rule 2: two pages sharing a title', () => {
  const files = validFiles();
  files['index.html'] = page({ path: '/', title: 'Same' });
  files['writing/index.html'] = page({ path: '/writing/', title: 'Same' });
  assertRule(run(files), 2, 'title duplicates');
});

test('rule 3: malformed JSON-LD', () => {
  const files = validFiles();
  files['index.html'] = page({ path: '/', ld: ['{oops'] });
  assertRule(run(files), 3, 'does not parse');
});

test('rule 3: post without BreadcrumbList', () => {
  const files = validFiles();
  files['writing/a/index.html'] = page({
    path: '/writing/a/',
    ld: [person, posting].map((b) => JSON.stringify(b)),
  });
  assertRule(run(files), 3, 'BreadcrumbList');
});

test('rule 3: BlogPosting author differs from Person', () => {
  const files = validFiles();
  const other = { ...posting, author: { '@id': `${site}/#someone-else` } };
  files['writing/a/index.html'] = page({
    path: '/writing/a/',
    ld: [person, other, crumbs].map((b) => JSON.stringify(b)),
  });
  assertRule(run(files), 3, 'does not match');
});

test('rule 4: page missing from the sitemap', () => {
  const files = validFiles();
  files['sitemap-0.xml'] = sitemap(['/', '/writing/a/', '/writing/a-much-longer-slug/']);
  assertRule(run(files), 4, 'not in the sitemap');
});

test('rule 4: sitemap URL with no matching file', () => {
  const files = validFiles();
  files['sitemap-0.xml'] += sitemap(['/gone/']);
  assertRule(run(files), 4, 'no matching file');
});

test('rule 4: sitemap lists a noindex page', () => {
  const files = validFiles();
  files['writing/index.html'] = '<html><head><meta name="robots" content="noindex"></head></html>';
  assertRule(run(files), 4, 'noindex');
});

test('rule 5: post with no og.png', () => {
  const files = validFiles();
  delete files['writing/a/og.png'];
  assertRule(run(files), 5, 'og.png');
});

test('rule 5: post with no Markdown twin', () => {
  const files = validFiles();
  delete files['writing/a-much-longer-slug.md'];
  assertRule(run(files), 5, 'twin');
});

test('rule 5: post missing from llms.txt', () => {
  const files = validFiles();
  files['llms.txt'] = `${site}/writing/a/`;
  assertRule(run(files), 5, 'llms.txt');
});

test('rule 6: draft slug present in rss.xml', () => {
  const files = validFiles();
  files['rss.xml'] += `<link>${site}/writing/secret/</link>`;
  assertRule(run(files, { 'secret.md': '---\ndraft: true\n---\nbody' }), 6, 'secret');
});

test('rule 6: published source posts are not treated as drafts', () => {
  assert.deepEqual(run(validFiles(), { 'a.md': '---\ndraft: false\n---\nbody' }), []);
});

test('rule 7: img with no alt', () => {
  const files = validFiles();
  files['index.html'] = page({ path: '/', body: '<h1>A</h1><img src="/x.png">' });
  assertRule(run(files), 7, 'without alt');
});

test('rule 7: an empty alt is allowed for decorative images', () => {
  const files = validFiles();
  files['index.html'] = page({ path: '/', body: '<h1>A</h1><img src="/x.png" alt="">' });
  assert.deepEqual(run(files), []);
});
