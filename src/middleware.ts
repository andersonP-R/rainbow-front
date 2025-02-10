import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const session = request.cookies.get("session")?.value;

  if (!token) {
    return NextResponse.rewrite(new URL("/auth/login", request.url));
  }

  if (!session) {
    return NextResponse.rewrite(new URL("/auth/login", request.url));
  }

  NextResponse.next().cookies.set("session", session);
}

export const config = {
  matcher: ["/profile"],
};
