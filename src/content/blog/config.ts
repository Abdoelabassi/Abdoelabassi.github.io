import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date(),
      content: z.string().optional(),
      description: z.string().max(200),
    }),
  }),
};
