import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // const sessionCookie = getSessionCookie(request, {
  //   cookieName: "session_token",
  // });
  const sessionCookie = request.cookies.get("session_token");

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
