import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

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
    faqs: z.array(faqSchema),
  }),
});

const cities = defineCollection({
  loader: glob({ base: './src/content/cities', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    county: z.string(),
    metaTitle: z.string().max(60),
    description: z.string().min(140).max(160),
    intro: z.string(),
    heroAlt: z.string(),
    ready: z.boolean().default(true),
    nearbyCities: z.array(z.string()).min(3).max(4),
    nearbyProjects: z.array(
      z.object({
        label: z.string(),
        town: z.string(),
        service: z.string(),
        title: z.string(),
        scope: z.string(),
        href: z.string(),
      }),
    ),
    faqs: z.array(faqSchema).min(3).max(4),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().max(60),
    description: z.string().min(140).max(160),
    city: z.string(),
    services: z.array(z.string()).min(1),
    date: z.coerce.date(),
    scopeSummary: z.string(),
    surfaces: z.string(),
    durationDays: z.number().int().positive(),
    colorsUsed: z.array(
      z.object({
        brand: z.string(),
        name: z.string(),
      }),
    ),
    coverAlt: z.string(),
    galleryAlts: z.array(z.string()).min(4).max(15),
    hasBeforeAfter: z.boolean().default(false),
  }),
});

export const collections = { services, cities, projects };
