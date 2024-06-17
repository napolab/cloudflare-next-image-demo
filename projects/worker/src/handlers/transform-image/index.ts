import { zValidator } from "@hono/zod-validator";

import { preventResizeLoop } from "@middlewares/prevent-resize-loop";

import { factory } from "./factory";
import { TransformOptions } from "./schema";

export const transformImageHandler = factory.createHandlers(
  preventResizeLoop,
  zValidator("query", TransformOptions),
  async (c) => {
    const query = c.req.valid("query");
    const accept = c.req.header("accept") ?? "";

    return fetch(c.req.raw, {
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
  },
);
