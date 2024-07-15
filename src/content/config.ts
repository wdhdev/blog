import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        published: z.coerce.number(),
        updated: z.coerce.number().optional(),
        heroImage: z.string().optional(),
    }),
});

export const collections = { blog };
