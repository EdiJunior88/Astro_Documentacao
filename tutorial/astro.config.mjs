import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-edijunior88.netlify.app/",
  integrations: [sitemap(), robotsTxt(), preact()]
});