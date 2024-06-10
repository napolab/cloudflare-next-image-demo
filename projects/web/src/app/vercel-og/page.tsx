import { Metadata } from "next";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { headers } from "next/headers";

export const runtime = "edge";
export const generateMetadata = async (): Promise<Metadata> => {
  const { env } = await getRequestContext();
  const url = headers().get("x-req-url") ?? env.CF_PAGES_URL;

  return {
    metadataBase: new URL("/", url),
    title: "OpenGraph Image Demo | napochaan.dev",
    description:
      "This is an OpenGraph image demo on @cloudflare/next-on-pages.",
    openGraph: {
      description:
        "This is an OpenGraph image demo on @cloudflare/next-on-pages.",
    },
    twitter: {
      card: "summary_large_image",
      description:
        "This is an OpenGraph image demo on @cloudflare/next-on-pages.",
    },
  };
};

const Page = async () => {
  return (
    <section>
      <h1>Hello, world!</h1>
    </section>
  );
};

export default Page;
