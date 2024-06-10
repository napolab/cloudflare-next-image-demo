import type { Metadata } from "next";
import styles from "./layout.module.css";
import { headers } from "next/headers";

import "./global.css";

export const runtime = "edge";

export const generateMetadata = async (): Promise<Metadata> => {
  const url = headers().get("x-req-url") ?? "https://next-demo.napochaan.dev";

  return {
    metadataBase: new URL("/", url),
    title:
      "Demo of `next/image` using Cloudflare Transform images | napochaan.dev",
    description: "Demo of next/image using Cloudflare Transform images",
    openGraph: {
      title: "Demo of `next/image` using Cloudflare Transform images",
      description: "Demo of next/image using Cloudflare Transform images",
      type: "website",
      url,
      images: [
        {
          url: new URL("/images/ogp.png", url),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creatorId: "@naporin24690",
      title: "Demo of `next/image` using Cloudflare Transform images",
      images: [
        {
          url: new URL("/images/ogp.png", url),
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <main>{children}</main>
      </body>
    </html>
  );
}
