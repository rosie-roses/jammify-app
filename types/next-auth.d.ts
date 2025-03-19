import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    access_token: string;
    refresh_token: string;
    expires_at: number;
    user: {
      id: string;
      name: string;
      email: string;
      image: string | null;
    };
    error?: string;
  }
  interface Account {
    access_token: string;
    refresh_token: string;
    expires_in: number;  // Added 'expires_in' property
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string;
    refresh_token: string;
    expires_at: number;
    user: {
      id: string;
      name: string;
      email: string;
      image: string | null;
    };
    error?: string;
  }
}