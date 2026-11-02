import { z } from 'astro/zod';

// Limits follow what search results and social previews display in full.
// A violation fails the build, so a post cannot ship with weak metadata.
export const postSchema = z
  .object({
    title: z.string().min(10).max(70),
    description: z.string().min(50).max(160),
    summary: z.string().min(40).max(400),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string().min(1)).min(1).max(5),
    draft: z.boolean().default(false),
  })
  .refine((post) => !post.updatedAt || post.updatedAt >= post.publishedAt, {
    message: 'updatedAt must not be before publishedAt',
    path: ['updatedAt'],
  });
