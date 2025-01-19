import { defineCollection, z } from "astro:content";

export const collections = {
    products: defineCollection({
        schema: z.object({
            title: z.string(),
            date: z.date(),
            marque: z.string(),
            price: z.number(),
            image: z.string(),
            content: z.string(),
            description: z.string().max(200)
        })
    })
}