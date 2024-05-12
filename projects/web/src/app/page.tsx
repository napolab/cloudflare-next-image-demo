import Image from "@components/image";
import { formatBlurURL } from "@components/image/helper";

export const runtime = "edge";

const Page = async () => {
  return (
    <main>
      <section>
        <h1>Cloudflare Image Transformer</h1>
        <Image
          src="/images/main.png"
          blurDataURL={formatBlurURL("/images/main.png", { blur: 10 })}
          placeholder="blur"
          alt="local large image"
          width={1000}
          height={500}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <Image
          src="/images/main.png"
          blurDataURL={formatBlurURL("/images/main.png", { blur: 10 })}
          alt="local image"
          placeholder="blur"
          width={400}
          height={200}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <Image
          src="https://public.napochaan.dev/images%2FComfyUI_LCM_00182_.png"
          blurDataURL={formatBlurURL(
            "https://public.napochaan.dev/images%2FComfyUI_LCM_00182_.png",
            { blur: 10 },
          )}
          placeholder="blur"
          alt="remote image"
          width={100}
          height={50}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </section>
    </main>
  );
};

export default Page;
