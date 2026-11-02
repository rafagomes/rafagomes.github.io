import { getCollection } from 'astro:content';

// Newest first. Drafts are visible in `astro dev` only.
export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !import.meta.env.PROD || !data.draft);
  return posts.sort((a, b) => b.data.publishedAt - a.data.publishedAt);
}

export const postUrl = (post, site) => new URL(`/writing/${post.id}/`, site).href;
