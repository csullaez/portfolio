// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://portfolio.vercel.app',
  adapter: vercel(),
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss() as any]
  }
});
