import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });

/** src/content/services/*.md - one file per service page */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    order: z.number(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    headline: z.string(),
    summary: z.string(),
    menuText: z.string(), // one short line shown in the Services dropdown
    accent: z.enum(['sky', 'lime', 'lilac']).default('sky'),
    capabilities: z.array(
      z.object({ id: z.string(), name: z.string(), text: z.string(), tags: z.array(z.string()).default([]) }),
    ),
    whoFor: z.array(z.string()),
    outcomes: z.array(z.string()),
    process: z.array(z.object({ name: z.string(), text: z.string() })),
    faqs: z.array(faq),
  }),
});

/** src/content/insights/*.md - blog posts */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    readingTime: z.string().optional(),
    author: z.string().default('Advica AI Solutions'),
    draft: z.boolean().default(false),
  }),
});

/** src/content/case-studies/*.md - real client projects only */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    service: z.enum(['ai-engineering', 'data-and-analytics', 'cloud-and-infrastructure', 'digital-products', 'blockchain', 'engineering-teams']),
    summary: z.string(),
    results: z.array(z.string()).default([]),
    quote: z.object({ text: z.string(), name: z.string(), role: z.string() }).optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, insights, caseStudies };
