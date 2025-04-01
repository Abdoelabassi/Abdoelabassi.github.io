// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site:"https://Abdoelabassi.github.io",
  base:"/Abdolabassi.github.io",
  integrations: [
    tailwind(), 
    react(), 
    icon({
      include: {
        tabler: ['*'],
        'simple-icons': ['*']
      }
    })
  ],
});