// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import icon from "astro-icon";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://Abdoelabassi.github.io",
  integrations: [
    tailwind(),
    react(),
    icon({
      include: {
        tabler: ["*"],
        "simple-icons": ["*"],
      },
    }),
  ],
  output: "server", // Enable server-side rendering and API routes
  adapter: node({
    mode: "standalone",
  }),
});
