import { zValidator } from "@hono/zod-validator";

import { factory } from "@handlers/transform-image/factory";
import { preventResizeLoop } from "@middlewares/prevent-resize-loop";

import { TransformOptionsWithURL } from "./schema";

export const transformImageHandler = factory.createHandlers(
  preventResizeLoop,
  zValidator("query", TransformOptionsWithURL),
  async (c) => {
    const query = c.req.valid("query");
    const accept = c.req.header("accept") ?? "";
    const url = new URL(query.url, c.req.url);

    const res = await fetch(url, {
      cf: {
        image: {
          ...query,
          get quality() {
            return query.quality ?? query.q;
          },
          get width() {
            return query.width ?? query.w;
          },
          get height() {
            return query.height ?? query.h;
          },
          get format() {
            if (query.format !== undefined) {
              return query.format;
            }

            if (/image\/avif/.test(accept)) {
              return "avif";
            } else if (/image\/webp/.test(accept)) {
              return "webp";
            }

            return undefined;
          },
        },
      },
    });
    const headers = new Headers(res.headers);

    return c.body(res.body, {
      status: res.status,
      headers,
    });
  },
);
