import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import { env } from "node:process";

if (env.NODE_ENV === "development") {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    ...(env.NODE_ENV !== "development"
      ? { loader: "custom", loaderFile: "./image-loader.js" }
      : {}),
  },
};

export default nextConfig;
