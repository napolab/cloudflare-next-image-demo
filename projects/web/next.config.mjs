import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import { env } from "node:process";

if (env.NODE_ENV === "development") {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public.napochaan.dev",
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200].flatMap((size) => [
      size,
      size * 2,
    ]),
  },
};

export default nextConfig;
