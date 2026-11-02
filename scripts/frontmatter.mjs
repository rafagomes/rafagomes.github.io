// Reads post frontmatter outside the content layer (the sitemap config and the
// site check). The content schema stays the authority on whether a post is valid.
const field = (source, name) => {
  const block = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const value = block.match(new RegExp(`^${name}:[ \\t]*(.*)$`, 'm'))?.[1] ?? '';
  const quoted = value.match(/^(["'])(.*?)\1/);
  return quoted ? quoted[2] : value.replace(/\s+#.*$/, '').trim();
};

export const isDraft = (source) => field(source, 'draft') === 'true';

// Undefined for a missing or invalid date, which the content schema then reports by file.
export const lastmod = (source) => {
  const date = new Date(field(source, 'updatedAt') || field(source, 'publishedAt'));
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
};
