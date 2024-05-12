import { z } from "zod";

const Fit = z.union([
  z.literal("scale-down"),
  z.literal("contain"),
  z.literal("cover"),
  z.literal("crop"),
  z.literal("pad"),
]);
const Format = z.union([
  z.literal("avif"),
  z.literal("webp"),
  z.literal("jpeg"),
  z.literal("png"),
  z.literal("json"),
]);

const Rotate = z.coerce
  .number()
  .refine(
    (value): value is 0 | 90 | 180 | 270 | 360 =>
      value === 0 ||
      value === 90 ||
      value === 180 ||
      value === 270 ||
      value === 360,
  );

export const TransformOptions = z.object({
  url: z.string(),
  blur: z.coerce.number().min(0).max(250).optional(),
  brightness: z.coerce.number().min(0).max(1).optional(),
  fit: Fit.optional(),

  format: Format.optional(),
  f: Format.optional(),

  height: z.coerce.number().min(0).optional(),
  h: z.coerce.number().min(0).optional(),

  width: z.coerce.number().min(0).optional(),
  w: z.coerce.number().min(0).optional(),

  metadata: z
    .union([z.literal("keep"), z.literal("copyright"), z.literal("none")])
    .optional(),
  quality: z.coerce.number().min(0).max(100).optional(),
  rotate: Rotate.optional(),
});
