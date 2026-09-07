// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: For a GitHub Pages *user* site, name the repo `<username>.github.io`
// and keep `site` at the root domain below (no `base` needed).
// For a *project* repo (e.g. `portfolio`), set `base: '/portfolio'` and
// change `site` to 'https://0xrafasec.github.io'.
export default defineConfig({
  site: 'https://rafagomes.tech',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
