import Image from "@components/image";
import { formatBlurURL } from "@components/image/helper";
import image from "@images/main.png";

export const runtime = "edge";

const Page = async () => {
  return (
    <main>
      <section>
        <h1>Cloudflare Image Transformer</h1>
        <article>
          <h2>local image(public directory)</h2>
          <Image
            src="/images/main.png"
            blurDataURL={formatBlurURL("/images/main.png", { blur: 10 })}
            placeholder="blur"
            alt="public local large image"
            width={1000}
            height={500}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <Image
            src="/images/main.png"
            blurDataURL={formatBlurURL("/images/main.png", { blur: 10 })}
            alt="public local medium image"
            placeholder="blur"
            width={400}
            height={200}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <Image
            src="/images/main.png"
            blurDataURL={formatBlurURL("/images/main.png", { blur: 10 })}
            alt="public local small image"
            placeholder="blur"
            width={100}
            height={50}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </article>

        <article>
          <h2>
            local image(
            <code>import image from &quot;@image/main.png&quot;</code>)
          </h2>
          <Image
            src={image}
            alt="public local large image"
            width={1000}
            height={500}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <Image
            src={image}
            alt="public local medium image"
            placeholder="blur"
            width={400}
            height={200}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <Image
            src={image}
            alt="public local small image"
            placeholder="blur"
            width={100}
            height={50}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </article>

        <article>
          <h2>remote image</h2>
          <Image
            src="https://public.napochaan.dev/images%2FComfyUI_LCM_00182_.png"
            blurDataURL={formatBlurURL(
              "https://public.napochaan.dev/images%2FComfyUI_LCM_00182_.png",
              { blur: 10 },
            )}
            placeholder="blur"
            alt="remote large image"
            width={1000}
            height={500}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <Image
            src="https://public.napochaan.dev/images%2FComfyUI_LCM_00182_.png"
            blurDataURL={formatBlurURL(
              "https://public.napochaan.dev/images%2FComfyUI_LCM_00182_.png",
              { blur: 10 },
            )}
            placeholder="blur"
            alt="remote medium image"
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
            alt="remote small image"
            width={100}
            height={50}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </article>
      </section>
    </main>
  );
};

export default Page;
