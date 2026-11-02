import base from '../data/llms-base.md?raw';
import { getPublishedPosts, postUrl } from '../lib/posts.js';

export async function GET({ site }) {
  const posts = await getPublishedPosts();
  const writing = posts.length
    ? `\n## Writing\n\n${posts
        .map((post) => `- [${post.data.title}](${postUrl(post, site)}): ${post.data.description}`)
        .join('\n')}\n`
    : '';

  return new Response(`${base.trimEnd()}\n${writing}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
