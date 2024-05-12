import { zValidator } from "@hono/zod-validator";
import { preventResizeLoop } from "../middlewares/prevent-resize-loop";
import { TransformOptions } from "./schema";
import { factory } from "./factory";

const red = "\u001b[31m";
const green = "\u001b[32m";

const reset = "\u001b[0m";

export const transformImageHandler = factory.createHandlers(
  preventResizeLoop,
  zValidator("query", TransformOptions),
  async (c) => {
    console.debug(`${red}transform image [${c.req.url}]${reset}`);
    const query = c.req.valid("query");
    const accept = c.req.header("accept") ?? "";
    const imageURL = new URL(query.url ?? c.req.url, c.req.url);

    const res = await fetch(imageURL, {
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

    return res;
  },
);
