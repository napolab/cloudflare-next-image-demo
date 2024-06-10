import type { Metadata } from "next";
import styles from "./layout.module.css";

import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://next-demo.napochaan.dev"),
  title:
    "Demo of `next/image` using Cloudflare Transform images | napochaan.dev",
  description: "Demo of next/image using Cloudflare Transform images",
  openGraph: {
    title: "Demo of `next/image` using Cloudflare Transform images",
    description: "Demo of next/image using Cloudflare Transform images",
    type: "website",
    url: "https://next-demo.napochaan.dev",
    images: [
      {
        url: "https://next-demo.napochaan.dev/images/ogp.png",
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
        url: "https://next-demo.napochaan.dev/images/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
