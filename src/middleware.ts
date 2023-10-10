import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const isLogged = req.cookies.has("name");
  if (!isLogged) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/post/:postId*"],
};
