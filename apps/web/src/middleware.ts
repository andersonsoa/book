import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

export const config = { matcher: ["/", "/dashboard"] };
