import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// List of paths that should be excluded from authentication check
const excludedPaths = [
  "/sign-in",
  "/api/auth",
  "/_next/static",
  "/_next/image",
  "/assets",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow the request to proceed if the current path is in the excluded list
  if (excludedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // If there's no token, redirect to sign-in page
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If a token is found, allow the request to proceed
  return NextResponse.next();
}

// Add a matcher to limit which routes the middleware applies to
export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - sign-in (Login page)
   * - api/auth (Authentication API routes)
   * - _next/static (Next.js static files like JavaScript and CSS)
   * - _next/image (Next.js image optimisation files)
   * - assets (Files in the assets directory inside /public)
   */
  matcher: ["/((?!sign-in|api/auth|_next/static|_next/image|assets).*)"],
};