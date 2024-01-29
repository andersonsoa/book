import { DefaultUser, DefaultSession } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  type Role = {
    id: number;
    description: string;
  };

  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      token: string;
      roles: Role[];
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    roles: Role[];
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    roles: Role[];
    access_token: string;
  }
}
