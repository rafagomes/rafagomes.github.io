import assert from 'node:assert/strict';
import { test } from 'node:test';
import { postSchema } from '../src/lib/post-schema.js';
import { formatDate, jsonLd, pageTitle } from '../src/lib/seo.js';

const valid = {
  title: 'A valid post title',
  description: 'd'.repeat(50),
  summary: 's'.repeat(40),
  publishedAt: '2026-11-02',
  tags: ['one'],
};

const issuePaths = (input) =>
  postSchema.safeParse(input).error?.issues.map((issue) => issue.path.join('.')) ?? [];

test('schema accepts a valid post at the limits and defaults draft to false', () => {
  const result = postSchema.parse({ ...valid, description: 'd'.repeat(160), tags: ['1', '2', '3', '4', '5'] });
  assert.equal(result.draft, false);
});

for (const [name, patch, path] of [
  ['49-char description', { description: 'd'.repeat(49) }, 'description'],
  ['161-char description', { description: 'd'.repeat(161) }, 'description'],
  ['71-char title', { title: 't'.repeat(71) }, 'title'],
  ['39-char summary', { summary: 's'.repeat(39) }, 'summary'],
  ['no tags', { tags: [] }, 'tags'],
  ['six tags', { tags: ['1', '2', '3', '4', '5', '6'] }, 'tags'],
  ['updatedAt before publishedAt', { updatedAt: '2026-11-01' }, 'updatedAt'],
]) {
  test(`schema rejects ${name}`, () => {
    assert.deepEqual(issuePaths({ ...valid, ...patch }), [path]);
  });
}

test('schema accepts updatedAt equal to publishedAt', () => {
  assert.deepEqual(issuePaths({ ...valid, updatedAt: '2026-11-02' }), []);
});

test('date-only values do not shift in timezones behind UTC', () => {
  const original = process.env.TZ;
  for (const tz of ['America/Sao_Paulo', 'Pacific/Auckland', 'UTC']) {
    process.env.TZ = tz;
    const { publishedAt } = postSchema.parse(valid);
    assert.equal(formatDate(publishedAt), 'Nov 2, 2026', tz);
  }
  process.env.TZ = original;
});

test('jsonLd keeps a closing script tag out of the output and round-trips', () => {
  const data = { headline: 'Breaking </script><script>alert(1)</script>' };
  const output = jsonLd(data);
  assert.ok(!output.includes('<'));
  assert.deepEqual(JSON.parse(output), data);
});

test('pageTitle adds the name only when the result fits', () => {
  assert.equal(pageTitle('Short title', 'Rafa Gomes'), 'Short title — Rafa Gomes');
  const long = 't'.repeat(60);
  assert.equal(pageTitle(long, 'Rafa Gomes'), long);
});
