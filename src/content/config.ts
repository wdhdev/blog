import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string({
            required_error: "Required frontmatter missing: title",
            invalid_type_error: "title must be a string"
        }),
        description: z.string({
            required_error: "Required frontmatter missing: description",
            invalid_type_error: "description must be a string"
        }),
        date: z.date({
            required_error: "Required frontmatter missing: date",
            invalid_type_error:
                "date must be written in yyyy-mm-dd format without quotes: For example, Jan 22, 2000 should be written as 2000-01-22."
        }),
        draft: z
            .boolean({
                invalid_type_error: "draft must be a boolean"
            })
            .optional()
            .default(false),
        updated: z
            .date({
                invalid_type_error:
                    "updated must be written in yyyy-mm-dd format without quotes: For example, Jan 22, 2000 should be written as 2000-01-22."
            })
            .optional(),
        heroImage: z
            .string({
                invalid_type_error: "heroImage must be a string"
            })
            .optional()
    })
});

export const collections = { blog };
