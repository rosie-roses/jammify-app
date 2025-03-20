"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const useSpotify = () => {
  const { data: session, status } = useSession();
  const [spotify, setSpotify] = useState<SpotifyWebApi.SpotifyWebApiJs | null>(
    null
  );

  useEffect(() => {
    if (!session || !session.access_token) {
      return;
    }

    if (
      session.error === "RefreshAccessTokenError" ||
      (status !== "authenticated" && status !== "loading")
    ) {
      signIn();
      return;
    }

    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(session.access_token);

    setSpotify(spotifyApi);
  }, [session, status]);

  return spotify;
};

export default useSpotify;
