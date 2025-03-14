import { defineCollection, z } from 'astro:content';

export const collections = {
  writing: defineCollection({
    type: 'content', // Use 'content' type for directory-based content
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      type: z.enum(['article', 'note', 'tutorial']).default('article'),
      draft: z.boolean().default(false),
      author: z.string().optional(),
      category: z.string().optional(),
      // Note: featuredImage is now imported directly in the MDX files
    }),
  }),
  // Adding projects collection
  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      author: z.string().optional(),
      category: z.string().optional(),
      headerImage: z.string().optional(),
      headerImageAlt: z.string().optional(),
    }),
  }),
  // You can add other collections as needed, such as projects or artifacts
}; 