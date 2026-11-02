import { profile } from '../../data/profile.js';
import { getPublishedPosts, postUrl } from '../../lib/posts.js';
import { isoDate } from '../../lib/seo.js';

export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export function GET({ props: { post }, site }) {
  const { title, summary, publishedAt, updatedAt } = post.data;
  const header = [
    `# ${title}`,
    '',
    `- Author: ${profile.name} (${site.href})`,
    `- Published: ${isoDate(publishedAt)}`,
    ...(updatedAt ? [`- Updated: ${isoDate(updatedAt)}`] : []),
    `- Canonical: ${postUrl(post, site)}`,
    '',
    summary,
  ].join('\n');

  return new Response(`${header}\n\n${post.body.trim()}\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
