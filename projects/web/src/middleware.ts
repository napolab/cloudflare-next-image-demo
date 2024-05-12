import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-req-url", request.url);

  return NextResponse.next({
    request: {
      headers,
    },
  });
}
