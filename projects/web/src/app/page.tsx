import Image from "@components/image";
import { formatBlurURL } from "@components/image/helper";
import image from "@images/main.png";
import styles from "./page.module.css";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";
import Link from "next/link";

export const runtime = "edge";

const Article = ({
  title,
  subTitle,
  src,
  alt,
}: {
  title: string;
  subTitle: ReactNode;
  src: StaticImport | string;
  alt: string;
}) => {
  const imageSizes = [
    { size: "large", width: 1000, height: 500 },
    { size: "medium", width: 400, height: 200 },
    { size: "small", width: 100, height: 50 },
  ];

  return (
    <article className={styles.article}>
      <hgroup className={styles.hgroup}>
        <h2 className={styles.h2}>{title}</h2>
        {subTitle}
      </hgroup>

      <div className={styles.images}>
        {imageSizes.map((img) => (
          <figure key={img.size} className={styles.figure}>
            <Image
              src={src}
              blurDataURL={
                typeof src === "string"
                  ? formatBlurURL(src, { blur: 10 })
                  : undefined
              }
              alt={`${alt} ${img.size} image`}
              placeholder="blur"
              width={img.width}
              height={img.height}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <figcaption>
              {img.size}({img.width} x {img.height})
            </figcaption>
          </figure>
        ))}
        <figure className={styles.figure}>
          <div className={styles.fill}>
            <Image
              src={src}
              blurDataURL={
                typeof src === "string"
                  ? formatBlurURL(src, { blur: 10 })
                  : undefined
              }
              alt={`${alt} fill image`}
              placeholder="blur"
              fill
            />
          </div>
          <figcaption>fill</figcaption>
        </figure>
      </div>
    </article>
  );
};

const Page = async () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.h1}>
        Demo of <code>next/image</code> using Cloudflare Transform images
      </h1>
      <p className={styles.description}>
        You can effectively view this by setting the network throttling profile
        to &quot;Slow 3G&quot; in the DevTools network tab.{" "}
        <Link href="https://github.com/napolab/cloudflare-next-image-demo">
          GitHub
        </Link>
      </p>
      <div className={styles.articles}>
        <Article
          title="LOCAL IMAGE"
          subTitle={<code>public/images/main.png</code>}
          src="/images/main.png"
          alt="public local"
        />
        <Article
          title="LOCAL IMAGE"
          subTitle={<code>import image from &quot;@images/main.png&quot;</code>}
          src={image}
          alt="imported local"
        />
        <Article
          title="REMOTE IMAGE"
          subTitle={<code>https://public.napochaan.dev</code>}
          src="https://public.napochaan.dev/images/ComfyUI_LCM_00182_.png"
          alt="remote"
        />
      </div>
    </section>
  );
};

export default Page;
