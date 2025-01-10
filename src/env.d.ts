/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  CMS_URL: string;
  PUBLIC_RECAPTCHA_KEY: string;
  PUBLIC_API_PREFIX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
