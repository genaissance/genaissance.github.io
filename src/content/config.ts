import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.date(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  articles,
  projects,
};