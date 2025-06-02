// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import node from "@astrojs/node";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://Abdoelabassi.github.io",
  output: "server", // Required for API routes

  // Add server adapter for deployment
  // For example, with Node:
  adapter: node({
    mode: "standalone",
  }),
  integrations: [tailwind(), react(), icon({
    include: {
      tabler: ["*"],
      "simple-icons": ["*"],
    },
  }), mdx()],
});