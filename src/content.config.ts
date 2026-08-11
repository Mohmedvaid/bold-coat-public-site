import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().max(60),
    description: z.string().min(140).max(160),
    summary: z.string(),
    eyebrow: z.string(),
    heroAlt: z.string(),
    relatedCities: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
  }),
});

export const collections = { services };
