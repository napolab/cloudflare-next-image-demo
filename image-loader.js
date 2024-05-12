export default function cloudflareLoader(options) {
  const { src, width, quality = 80 } = options;

  const searchParams = new URLSearchParams();
  searchParams.append("width", width);
  searchParams.append("quality", quality);
  searchParams.append("url", src);
  console.log(searchParams.toString());

  return `/cf/image?${searchParams.toString()}`;
}
