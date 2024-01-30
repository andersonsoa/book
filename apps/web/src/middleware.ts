import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.roles.some((r) => r.id !== 2)
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },
  {
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      authorized(params) {
        return !!params.token;
      },
    },
    pages: {
      signIn: "/",
    },
  },
);

export const config = {
  matcher: ["/(bookmarks|admin|material)", "/(bookmarks|admin)/:path*"],
};
