import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });
const serviceIds = ['ai-and-automation', 'websites-apps-and-software', 'hosting-security-and-support', 'extra-developers'] as const;

/** src/content/services/*.md: one file per service page */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    summary: z.string(), // one or two sentences, used on the homepage and in the menu
    problem: z.string(), // the problem it solves, in everyday terms
    whoFor: z.array(z.string()),
    whatWeDo: z.array(z.object({ name: z.string(), text: z.string() })),
    examples: z.array(z.string()), // real example projects, or [PLACEHOLDER] notes
    steps: z.array(z.object({ name: z.string(), text: z.string() })),
    timeline: z.string(),
    faqs: z.array(faq),
  }),
});

/** src/content/industries/*.md: one file per industry */
const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    examples: z.array(z.string()),
    show: z.boolean().default(true),
  }),
});

/** src/content/insights/*.md: blog posts */
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

/** src/content/case-studies/*.md: real client projects only */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    service: z.enum(serviceIds),
    summary: z.string(),
    results: z.array(z.string()).default([]),
    quote: z.object({ text: z.string(), name: z.string(), role: z.string() }).optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, industries, insights, caseStudies };
