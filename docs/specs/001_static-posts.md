# Feature: Static posts with strong SEO and GEO

## Trunk Metadata
- **Type:** feat
- **Flag:** `none` (nothing links to `/writing/` until a post is published; see Empty state)
- **Depends on:** —
- **Complexity:** med
- **Issue:** —

## Problem
rafagomes.tech is a single page, so it can only rank and be cited for Rafa's name. There is nowhere to publish writing that search engines and AI answer engines can index, quote and attribute to him.

## Solution
Add Markdown posts under `/writing/`, built statically with Astro content collections. Every post ships complete metadata, structured data tied to one author entity, and machine-readable versions. A check over the built site fails CI when any of this regresses.

## Technical Design

### Affected Files
Create:
- `src/content.config.ts`: `posts` collection and schema
- `src/content/posts/<slug>.md`: posts; the filename is the slug
- `src/lib/posts.js`: `getPublishedPosts()`, newest first, with drafts removed in production builds
- `src/lib/post-schema.js`: the frontmatter schema, separate so it can be unit tested
- `src/lib/seo.js`: JSON-LD escaping, date formatting and page titles
- `src/components/PageNav.astro`, `src/components/PostList.astro`: shared by the post, list and home pages
- `src/layouts/Post.astro`: article layout on top of `Base.astro`
- `src/pages/writing/index.astro`: post list
- `src/pages/writing/[slug].astro`: post page
- `src/pages/writing/[slug].md.ts`: Markdown twin
- `src/pages/writing/[slug]/og.png.ts`: generated OG image
- `src/pages/rss.xml.js`: RSS feed
- `src/pages/llms.txt.ts`: generated `llms.txt`
- `src/data/llms-base.md`: current `public/llms.txt` content, moved
- `scripts/check-site.mjs`: built-site check
- `scripts/check-site.test.mjs`: tests for the check, using fixtures
- `scripts/post-content.test.mjs`: tests for the schema and SEO helpers

Modify:
- `src/layouts/Base.astro`, `src/pages/index.astro`, `src/styles/global.css`
- `astro.config.mjs`, `package.json`, `.github/workflows/deploy.yml`, `public/robots.txt`

Delete: `public/llms.txt` (it would collide with the generated route).

### Data Model
Frontmatter, enforced by a Zod schema so a violation fails the build:

| Field | Rule |
|---|---|
| `title` | string, 10–70 chars |
| `description` | string, 50–160 chars; used for the meta description and feeds |
| `summary` | string, 40–400 chars; shown at the top of the post as a self-contained answer |
| `publishedAt` | date |
| `updatedAt` | optional date, must not be before `publishedAt` |
| `tags` | 1–5 strings; rendered as plain text and in metadata, with no tag pages |
| `draft` | boolean, default `false` |

Dates are rendered in UTC so a date-only value never shifts by a day.

### URLs
- Set `trailingSlash: 'always'` in `astro.config.mjs` so canonical URLs, the sitemap and internal links all agree: `/writing/` and `/writing/<slug>/`.
- `/writing/<slug>.md`, `/writing/<slug>/og.png`, `/rss.xml` and `/llms.txt` are files, with no trailing slash.

### Metadata (`Base.astro`)
`Base.astro` takes optional `ogType` (default `website`; the home page passes `profile`), `ogImage`, `ogImageAlt` and a `head` slot. Profile meta tags render only when `ogType` is `profile`.

Fix: `Person.url` is currently the page canonical, which would describe Rafa as the post on every post page. It becomes the site root, and `Person` gains `@id: https://rafagomes.tech/#person`.

All JSON-LD goes through one helper that escapes `<` as `<`, so frontmatter can never close the script tag.

Every page gets `<link rel="alternate" type="application/rss+xml" href="/rss.xml">`.

Post pages add:
- **Title:** `<title>` is `<title> — Rafa Gomes`, or the title alone when the combined length exceeds 65 chars.
- **Article tags:** `og:type=article`, `article:published_time`, `article:modified_time` (`updatedAt`, falling back to `publishedAt`), `article:author`, and one `article:tag` per tag.
- **Image:** `og:image` and `twitter:image` point at the post's generated image.
- **Twin:** `<link rel="alternate" type="text/markdown">` points at the Markdown twin.
- **`BlogPosting` JSON-LD:** `headline`, `description`, `image`, `datePublished`, `dateModified`, `inLanguage: en`, `keywords`, `wordCount`, `mainEntityOfPage`, with `author` and `publisher` both referencing `#person` by `@id`, `name` and `url`.
- **`BreadcrumbList` JSON-LD:** Home → Writing → post.

### Page layout
- **Design reference:** Paper file "Resume" has only "Resume — Web" and "Resume — PDF"; there is no article artboard. Post pages extend the existing system in `global.css` (white × cobalt, Inter Tight display, mono labels) with a readable column of about 70 characters. The home page's latest-posts section follows the existing section-head and row patterns.
- **Post page order:** visible breadcrumb, `h1`, byline linking to `/` with `<time>` published and updated dates, summary block, body, tags, short author bio, up to 3 other posts.
- **Headings:** the title is the only `h1`; a `#` in a post body is caught by the site check. Headings keep Astro's generated `id`s, so they can be deep-linked.
- **Client JS:** none added.

### Internal links
Home nav gets `Writing`, and the home page gets a section with the latest 3 posts. Below 720px the nav hides its in-page anchors but keeps `Writing` and the PDF link.

### Empty state
With zero published posts: no nav link and no home section, `/writing/` renders with `noindex` and is left out of the sitemap, and the RSS feed is valid but empty. This keeps `main` deployable before the first post.

### Generated outputs
- **OG image:** 1200×630 PNG with the title, name and domain, in the site's style, using `satori` and `@resvg/resvg-js`. Fonts come from `@fontsource/inter-tight` WOFF files, so the build makes no network calls.
- **Markdown twin:** `text/markdown`; title, description, canonical URL, author and dates as a header, then the raw body.
- **RSS:** title, description, link and date for each published post, using `@astrojs/rss`.
- **`llms.txt`:** the base file plus a `## Writing` section with `- [title](url): description` per post.
- **Sitemap:** `serialize` adds `lastmod` (`updatedAt` or `publishedAt`) to post URLs, read from frontmatter in `astro.config.mjs`.
- **`robots.txt`:** adds `Claude-SearchBot` and `Claude-User`.

### Built-site check
`npm run check:site` runs `scripts/check-site.mjs` against `dist/`, and CI runs it between build and upload. It fails with the file and rule when any of these is false:

1. Every indexable HTML page has exactly one `h1`, a `<title>`, a meta description and a canonical URL equal to its own URL on `https://rafagomes.tech`.
2. Titles and descriptions are unique across indexable pages.
3. Every JSON-LD block parses. Post pages contain `BlogPosting` and `BreadcrumbList`, and the `BlogPosting` author `@id` matches the `Person` `@id`.
4. Every indexable page is in the sitemap, and the sitemap lists nothing that is missing or `noindex`.
5. Each post has its `og.png` and its `.md` twin, and appears in `rss.xml` and `llms.txt`.
6. Slugs of `draft: true` source posts appear nowhere: not in `dist/`, the sitemap, RSS or `llms.txt`.
7. Every `<img>` has an `alt` attribute.

`npm test` runs `node --test "scripts/*.test.mjs"`. The only other new scripts are `check:site`; no test framework is added.

## Size
About 620 added source lines, including the 140-line site check. It stays one PR because the metadata, feeds and check describe one capability, and a post without them would ship the weak SEO this feature exists to avoid.

## Security Considerations
- Posts are author-controlled and committed to the repo; there is no user input at runtime.
- JSON-LD escaping prevents frontmatter from breaking out of the script tag. Astro escapes all other frontmatter output.
- Four new packages are added (`satori`, `@resvg/resvg-js`, `@fontsource/inter-tight` and `@astrojs/rss`), and the CI workflow changes, so `/security-review` is required before the PR is ready. All run at build time only; none reach the browser.
- The Markdown twin exposes only the published body. Drafts must be filtered from every route, enforced by check 6.

## Verification Criteria
Verification command: `npm run build && npm run check:site && npm test`

### Schema
- [ ] `description` of 49 chars → build fails naming the field
- [ ] `updatedAt` earlier than `publishedAt` → build fails
- [ ] `tags: []` → build fails
- [ ] Date-only `publishedAt: 2026-11-02` → shown as Nov 2, 2026 under any `TZ`

### Check script (fixtures in `scripts/check-site.test.mjs`)
Each rule has a passing fixture, and these fixtures fail with the named rule:
- [ ] Page with two `h1`s → rule 1
- [ ] Canonical pointing at another page → rule 1
- [ ] Two pages sharing a title → rule 2
- [ ] Malformed JSON-LD → rule 3
- [ ] `BlogPosting` author `@id` differing from `Person` `@id` → rule 3
- [ ] Page missing from the sitemap → rule 4
- [ ] Sitemap URL with no matching file → rule 4
- [ ] Post with no `og.png` → rule 5
- [ ] Draft slug present in `rss.xml` → rule 6
- [ ] `<img>` with no `alt` → rule 7

### Built site, with the first post
- [ ] `/writing/<slug>/` contains `og:type=article`; the home page contains `og:type=profile`
- [ ] `Person.url` is `https://rafagomes.tech/` on both the home page and the post page
- [ ] `og.png` is a 1200×630 PNG
- [ ] Sitemap gives the post a `lastmod` equal to its latest date, and does not list `.md` or `.png` URLs
- [ ] A `draft: true` post produces no output in a production build
- [ ] A title containing `</script>` leaves the JSON-LD block intact and parseable
- [ ] Zero published posts → build succeeds, with no nav link or home section, and `/writing/` is `noindex` and not in the sitemap
- [ ] Rich Results Test accepts the `BlogPosting` and `BreadcrumbList` markup (run against the deployed URL)
- [ ] Lighthouse SEO score is 100 on the post page

### Browser
- [ ] Post page and `/writing/` have no horizontal scroll at 375px, including long code blocks

## Out of Scope
- `FAQPage` and `HowTo` markup, comments, search, tag pages and client-side JS
- Translations; posts are English only
- Moving 0xrafasec content here; it remains a separate identity, linked through `sameAs`
- Search Console and Bing Webmaster setup, which need Rafa's accounts
