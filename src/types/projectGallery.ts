import type { ImageMetadata } from "astro";

/** One slide in `ProjectSlider`: optimized local import + accessibility (+ optional DOM `id`). */
export type ProjectSlide = {
  src: ImageMetadata;
  alt: string;
  id?: string;
};
