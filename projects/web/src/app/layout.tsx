import type { Metadata } from "next";
import styles from "./layout.module.css";
import "./global.css";

export const metadata: Metadata = {
  title:
    "Demo of `next/image` using Cloudflare Transform images | napochaan.dev",
  description: "Demo of next/image using Cloudflare Transform images",
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
