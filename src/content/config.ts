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

const holdingSchema = z.object({
  symbol: z.string(),
  name: z.string().optional(),
  shares: z.number(),
  avg_price: z.number(),
});

const changelogSchema = z.object({
  date: z.string(),
  title: z.string(),
  changes: z.array(z.object({
    action: z.enum(['deposit', 'buy', 'sell', 'rebalance']),
    symbol: z.string().optional(),
    shares: z.number().optional(),
    price: z.number().optional(),
    amount: z.number().optional(),
    note: z.string().optional(),
  })),
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
    portfolio: z.object({
      deposito_rate: z.number().default(5.5),
      cash: z.number().default(0),
      holdings: z.array(holdingSchema),
      changelog: z.array(changelogSchema),
    }).optional(),
  }),
});

export const collections = { posts, pages };
