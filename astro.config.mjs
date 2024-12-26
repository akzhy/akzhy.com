import { defineConfig } from "astro/config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { astroImageTools } from "astro-imagetools";
import prism from "vite-plugin-prismjs";

import "./global";

import solidJs from "@astrojs/solid-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [solidJs(), astroImageTools],
  vite: {
    alias: {
      "@src/": `${path.resolve(__dirname, "src")}/`,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@src/styles/main.scss' as *;",
        },
      },
    },
    plugins: [
      prism({
        languages: [
          "javascript",
          "css",
          "markup",
          "typescript",
          "scss",
          "json",
          "bash",
          "php"
        ],
      }),
    ],
  },
  image: {
    domains: ["cms.akzhy.local"],
  },
});
