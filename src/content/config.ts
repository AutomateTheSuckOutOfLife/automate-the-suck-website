import { defineCollection, z } from 'astro:content';

export const collections = {
  writing: defineCollection({
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      type: z.enum(['article', 'note', 'tutorial']).default('article'),
      draft: z.boolean().default(false),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
      author: z.string().optional(),
      category: z.string().optional(),
      embeds: z.array(z.object({
        type: z.enum(['image', 'video']),
        url: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional(),
      })).optional(),
    }),
  }),
  // You can add other collections as needed, such as projects or artifacts
}; 