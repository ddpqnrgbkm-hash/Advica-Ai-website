// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://advicaaisolutions.co.uk',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|404)$/.test(page.replace(/\/$/, '')),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
