/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  CMS_URL: string;
  PUBLIC_RECAPTCHA_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
