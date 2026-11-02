import rss from '@astrojs/rss';
import { profile } from '../data/profile.js';
import { getPublishedPosts } from '../lib/posts.js';

export async function GET({ site }) {
  const posts = await getPublishedPosts();
  return rss({
    title: `${profile.name} — Writing`,
    description: `Writing by ${profile.name}, ${profile.title} at ${profile.company}.`,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.id}/`,
    })),
  });
}
