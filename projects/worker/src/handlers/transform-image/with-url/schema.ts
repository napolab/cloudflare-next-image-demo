import { z } from "zod";

import { TransformOptions } from "@handlers/transform-image/schema";

export const TransformOptionsWithURL = TransformOptions.extend({
  url: z.string(),
});
