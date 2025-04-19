import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get("token")?.value;

  // Check if the user is authenticated
  if (!token) {
    // Redirect to the login page if not authenticated
    const loginUrl = new URL("/account/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname); // Add redirect query param
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to proceed if authenticated
  return NextResponse.next();
}

// Apply middleware only to routes under /member
export const config = {
  matcher: "/member/:path*",
};