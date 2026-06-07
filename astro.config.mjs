import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://constrai.com.mt',
  integrations: [tailwind()],
  output: 'static',
});
