import { getRequestContext } from "@cloudflare/next-on-pages";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { cache } from "hono/cache";
import { TransformOptions } from "./schema";

export const runtime = "edge";

const app = new Hono();
app.get(
  "*",
  cache({ cacheName: "images", vary: ["Accept", "Accept-Encoding"] }),
  zValidator("query", TransformOptions),
  async (c) => {
    const query = c.req.valid("query");
    const accept = c.req.header("accept");
    const url = new URL(query.url, c.req.url).toString();
    console.log(url, c.req.url);

    return fetch(url, {
      cf: {
        image: {
          ...query,
          get width() {
            return query.width ?? query.w;
          },
          get height() {
            return query.height ?? query.h;
          },
          get format() {
            if (query.format !== undefined || accept === undefined)
              return query.format ?? query.f;

            if (/image\/avif/.test(accept)) {
              return "avif";
            } else if (/image\/webp/.test(accept)) {
              return "webp";
            }
          },
        },
      },
    });
  },
);

export const GET = async (req: Request) => {
  const { env, ctx } = await getRequestContext();

  return app.request(req, undefined, env, ctx);
};
