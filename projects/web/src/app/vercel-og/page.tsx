import { Metadata } from "next";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { headers } from "next/headers";

export const runtime = "edge";
export const generateMetadata = async (): Promise<Metadata> => {
  const { env } = await getRequestContext();
  const url = headers().get("x-req-url") ?? env.CF_PAGES_URL;

  return {
    metadataBase: new URL("/", url),
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
