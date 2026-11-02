// Escapes `<` so frontmatter can never close the surrounding script tag.
export const jsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

// Date-only frontmatter parses as UTC midnight, so render in UTC to avoid
// shifting a day in timezones behind it.
export const formatDate = (date) =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

export const isoDate = (date) => date.toISOString().slice(0, 10);

export const lastUpdated = (data) => data.updatedAt ?? data.publishedAt;

export const pageTitle = (title, name) => {
  const full = `${title} — ${name}`;
  return full.length <= 65 ? full : title;
};
