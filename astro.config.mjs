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
  redirects: {
    "/blog": "https://Abdoelabassi.github.io/blog", // for now
  },
});
