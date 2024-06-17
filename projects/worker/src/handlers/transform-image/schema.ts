import { z } from "zod";

const Format = z.union([
  z.literal("avif"),
  z.literal("webp"),
  z.literal("jpeg"),
  z.literal("png"),
]);

export const TransformOptions = z.object({
  blur: z.coerce.number().min(0).max(250).optional(),

  format: Format.optional(),

  height: z.coerce.number().min(0).optional(),
  h: z.coerce.number().min(0).optional(),

  width: z.coerce.number().min(0).optional(),
  w: z.coerce.number().min(0).optional(),

  quality: z.coerce.number().min(0).max(100).optional(),
  q: z.coerce.number().min(0).max(100).optional(),
});
