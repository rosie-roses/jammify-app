import SpotifyProvider from "next-auth/providers/spotify";
import NextAuth, { Account, NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt/types";
import { AdapterUser } from "next-auth/adapters";

const scopes = [
  "user-read-email",
  "user-read-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-library-read",
  "streaming",
  "user-follow-read",
  "user-top-read",
].join(",");

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope: scopes,
        },
      },
      token: "https://accounts.spotify.com/api/token",
      userinfo: "https://api.spotify.com/v1/me",
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images?.[0]?.url,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, user }: { token: JWT; account: Account | null; user: User | AdapterUser }) {
      // Initial sign-in
      if (account && user) {
        token.access_token = account.access_token || "";
        token.refresh_token = account.refresh_token || "";
        token.expires_at = Date.now() + account.expires_in * 1000
        token.user = {
          id: user.id,
          name: user.name || "",
          email: user.email || "",
          image: user.image || null,
        };
      }

      // Access token has not expired
      if (
        typeof token.expires_at === "number" &&
        Date.now() < token.expires_at
      ) {
        console.log("Spotify access token is still valid.");
        return token;
      }

      // If the token has expired, refresh it
      return await refreshSpotifyToken(token);
    },
    async session({ session, token }) {
      session.access_token = token.access_token;
      session.refresh_token = token.refresh_token;
      session.expires_at = token.expires_at;
      session.user = token.user;

      if (token.error) {
        session.error = token.error;
      }

      console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
};

// Helper function to refresh the token
async function refreshSpotifyToken(token: any) {
  console.log("Refreshing access token...");
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: token.refresh_token,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh Spotify token.");
    }

    const data = await response.json();

    return {
      ...token,
      access_token: data.access_token,
      expires_at: Date.now() + data.expires_in * 1000,
      refresh_token: data.refresh_token ?? token.refresh_token,
    };
  } catch (error) {
    console.error("Error refreshing Spotify token:", error);
    return {
      // Return the original token in case of an error
      token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
