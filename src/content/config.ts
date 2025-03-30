import { defineCollection, z } from "astro:content";

export const collections = {
    products: defineCollection({
        schema: z.object({
            title: z.string(),
            date: z.date(),
            marque: z.string(),
            price: z.number(),
            oldprice: z.number().optional(),
            discount: z.number().optional(),
            rating: z.number().optional(),
            stock: z.number().optional(),
            shipping: z.string().optional(),
            image: z.string(),
            content: z.string().optional(),
            description: z.string().max(200)
        })
    })
}