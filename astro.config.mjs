import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://Reaper3629.github.io',
  integrations: [tailwind(), icon()],

  /**
   * Image pipeline (Sharp when installed): anything imported from `src/assets/` and rendered with
   * `<Image />` from `astro:assets` is resized / re-encoded at **build** time.
   *
   * There is no single boolean like `convertToWebp: true` on the config root — the optimizer runs
   * for those imports automatically (output format defaults to WebP in production builds unless
   * you override per-image `format` / `quality` props). Files in `public/` are never processed.
   */
  image: {
    // Example overrides (uncomment if you want different defaults site-wide):
    // service: { entrypoint: 'astro/assets/services/sharp' },
  },
});