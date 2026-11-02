// @ts-check
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { isDraft, lastmod } from './scripts/frontmatter.mjs';

const SITE = 'https://rafagomes.tech';
const POSTS_DIR = './src/content/posts';

// The sitemap runs outside the content layer, so read the dates from frontmatter.
const postLastmod = new Map(
  (existsSync(POSTS_DIR) ? readdirSync(POSTS_DIR) : [])
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({ file, source: readFileSync(`${POSTS_DIR}/${file}`, 'utf8') }))
    .filter(({ source }) => !isDraft(source))
    .map(({ file, source }) => [`${SITE}/writing/${file.replace(/\.md$/, '')}/`, lastmod(source)]),
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
        const date = postLastmod.get(item.url);
        return date ? { ...item, lastmod: date } : item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
