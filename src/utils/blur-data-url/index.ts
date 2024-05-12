const config = {
  width: 64,
  quality: 10,
  blur: 50,
};

export const blurDataURL = (path: string, mode = process.env.NODE_ENV) => {
  const searchParams = new URLSearchParams();
  searchParams.set("url", path);
  searchParams.set("w", config.width.toString());
  searchParams.set("q", config.quality.toString());
  searchParams.set("blur", config.blur.toString());

  if (mode === "development") {
    return `/_next/image?${searchParams.toString()}`;
  }

  return `/cf/image?${searchParams.toString()}`;
};