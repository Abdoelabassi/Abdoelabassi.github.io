// src/content/config.ts
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const product = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/content/shops/" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    price: z.number().positive(),
    originalPrice: z.number().positive().optional(),
    category: z.string().optional(),
    image: z.string().url().optional(),
    gallery: z.array(z.string().url()).optional(),
    features: z.array(z.string()).optional(),
    inStock: z.boolean().default(true),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    brand: z.string().optional(),
    sku: z.string().optional(),
    weight: z.string().optional(),
    dimensions: z
      .object({
        length: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        unit: z.enum(["cm", "in"]).default("cm"),
      })
      .optional(),
    materials: z.array(z.string()).optional(),
    colors: z.array(z.string()).optional(),
    sizes: z.array(z.string()).optional(),
    rating: z.number().min(0).max(5).optional(),
    reviewCount: z.number().min(0).default(0),
    publishedAt: z.date().default(() => new Date()),
    updatedAt: z.date().optional(),
  }),
});

export const collections = {
  product,
};
