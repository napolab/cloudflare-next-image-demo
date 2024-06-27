import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: {
    banner: "/// <reference types='@cloudflare/workers-types' />",
  },
  splitting: false,
  clean: true,
  minify: true,
  external: [/^cloudflare:/],
});
