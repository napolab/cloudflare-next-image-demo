import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 640,
};

export const contentType = "image/png";

const Image = async () => {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Hello, world!</h1>
        <p>This is an OpenGraph image.</p>
      </div>
    ),
    {
      ...size,
    },
  );
};

export default Image;
