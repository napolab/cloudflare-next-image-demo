import type { ImageResizeWorker } from "@next-image-demo/worker";
import { WorkerEntrypoint } from "cloudflare:workers";

interface CloudflareEnv {
  readonly IMAGE_RESIZE_WORKER: ImageResizeWorker;
  readonly IMAGE_RESIZE: WorkerEntrypoint;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CloudflareEnv {}
  }
}
