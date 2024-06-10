interface CloudflareEnv {
  CF_PAGES_URL: string;
  CF_PAGES_BRANCH: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CloudflareEnv {}
  }
}
