import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'; 

export default defineConfig({
  // 1. Integrations array
  integrations: [react()],
  
  // 2. Vite compilation configuration settings
  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: 'lightningcss' // Forces Tailwind v4 engines to compile styling tokens
    }
  }
});