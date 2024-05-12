import { blurDataURL } from "@/utils/blur-data-url";
import Image from "next/image";

const Page = async () => {
  return (
    <main>
      <section>
        <h1>Cloudflare Image Transformer</h1>
        <Image
          src="/images/main.png"
          alt="main"
          width={800}
          height={400}
          placeholder="blur"
          blurDataURL={blurDataURL("/images/main.png")}
        />
      </section>
    </main>
  );
};

export default Page;
