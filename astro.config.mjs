// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import node from "@astrojs/node";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

import tailwindcss from "@tailwindcss/vite";

import sentry from "@sentry/astro";

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
    sentry({
      dsn: "https://5b44a6bd5db857a20405eb70cfc41803@o4509509422678016.ingest.de.sentry.io/4509509430673488",
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      // Setting this option to true will send default PII data to Sentry.
      // For example, automatic IP address collection on events
      //sendDefaultPii: true,
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/blog": "https://Abdoelabassi.github.io/blog", // for now
  },
});
