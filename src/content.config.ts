import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        pattern: "**/*.{md,mdx}"
    }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string({
            error: "Required frontmatter missing: title / title must be a string"
        }),
        description: z.string({
            error: "Required frontmatter missing: description / description must be a string"
        }),
        date: z.date({
            error: "Required frontmatter missing: date / date must be written in yyyy-mm-dd format without quotes: For example, Jan 22, 2000 should be written as 2000-01-22."
        }),
        draft: z
            .boolean({
                error: "draft must be a boolean"
            })
            .optional()
            .default(false),
        updated: z
            .date({
                error: "updated must be written in yyyy-mm-dd format without quotes: For example, Jan 22, 2000 should be written as 2000-01-22."
            })
            .optional(),
        heroImage: z
            .string({
                error: "heroImage must be a string"
            })
            .optional()
    })
});

export const collections = { blog };
