import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import swup from "@swup/astro";

import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  integrations: [
    swup({
      theme: "slide",
      progress: false,
      native: true,
      globalInstance: true,
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: {
              dark: "github-dark",
              light: "github-light",
            },
            keepBackground: false,
          },
        ],
        rehypeMdxCodeProps,
      ],
    }),
  ],
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
