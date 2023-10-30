import type { NextRequest } from "next/server";

import AdminMiddleware from "./lib/middleware/admin";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    return await AdminMiddleware(req);
  }
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
