import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  extend: config => {
    config.options.fileExtensions = ['.otf', '.woff', '.woff2'];
  },
  integrations: [react(), tailwind()],
  output: "server",
  adapter: netlify()
});