import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  isbn: z.string().optional(),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    books: z.object({
      reading: z.array(bookSchema),
      finished: z.array(bookSchema),
      wishlist: z.array(bookSchema),
    }).optional(),
  }),
});

export const collections = { posts, pages };
