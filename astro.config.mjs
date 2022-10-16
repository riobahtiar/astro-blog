import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://rio.deno.dev",
  integrations: [mdx(), sitemap(), react(), tailwind(), prefetch()],
  output: "server",
  adapter: deno(),
});
