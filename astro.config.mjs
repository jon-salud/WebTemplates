import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  site: 'https://your-agency.com',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  })
});
