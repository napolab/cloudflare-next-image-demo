import { Hono } from "hono";

import { transformImageHandler as transformRawImageHandler } from "@handlers/transform-image";
import { transformImageHandler as transformURLImageHandler } from "@handlers/transform-image/with-url";

const app = new Hono();

app.get("/_next/image", ...transformURLImageHandler);
app.get("/_next/static/media/*", ...transformRawImageHandler);
app.get("/images/*", ...transformRawImageHandler);
app.get("*", (c) => fetch(c.req.raw));

export default app;
