// @ts-check
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://rafagomes.tech';
const POSTS_DIR = './src/content/posts';

const field = (source, name) => source.match(new RegExp(`^${name}:\\s*(.+?)\\s*$`, 'm'))?.[1];

// The sitemap runs outside the content layer, so read the dates from frontmatter.
const postLastmod = new Map(
  (existsSync(POSTS_DIR) ? readdirSync(POSTS_DIR) : [])
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({ file, source: readFileSync(`${POSTS_DIR}/${file}`, 'utf8') }))
    .filter(({ source }) => field(source, 'draft') !== 'true')
    .map(({ file, source }) => [
      `${SITE}/writing/${file.replace(/\.md$/, '')}/`,
      new Date(field(source, 'updatedAt') ?? field(source, 'publishedAt') ?? '').toISOString(),
    ]),
);

// NOTE: For a GitHub Pages *user* site, name the repo `<username>.github.io`
// and keep `site` at the root domain below (no `base` needed).
// For a *project* repo (e.g. `portfolio`), set `base: '/portfolio'` and
// change `site` to 'https://0xrafasec.github.io'.
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // /writing/ is noindex until the first post is published.
      filter: (page) => postLastmod.size > 0 || page !== `${SITE}/writing/`,
      serialize: (item) => {
        const lastmod = postLastmod.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
