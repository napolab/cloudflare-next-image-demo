import { Hono } from "hono";
import { transformImageHandler } from "./transform-image";

const app = new Hono();

app.get("*", ...transformImageHandler);

export default app;
