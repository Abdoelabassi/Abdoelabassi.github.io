// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import node from "@astrojs/node";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Abdoelabassi.github.io",

  // Required for API routes
  output: "server",

  // Add server adapter for deployment
  // For example, with Node:
  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    react(),
    icon({
      include: {
        tabler: ["*"],
        "simple-icons": ["*"],
      },
    }),
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});