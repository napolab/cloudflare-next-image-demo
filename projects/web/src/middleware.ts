import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest): NextResponse => {
  const headers = new Headers(request.headers);
  headers.set("x-req-url", request.url);

  return NextResponse.next({
    request: {
      headers,
    },
  });
}
