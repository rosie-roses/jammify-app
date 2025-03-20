"use client";

import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const useUserFollowedArtists = ({
  spotify,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
}) => {
  const [userArtists, setUserArtists] = useState<SpotifyApi.ArtistObjectFull[]>(
    []
  );
  const [loadingUserArtists, setLoadingUserArtists] = useState(true);
  const [errorUserArtists, setErrorUserArtists] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserArtists = async () => {
      if (!spotify || !spotify.getAccessToken()) return;

      try {
        setLoadingUserArtists(true);
        const res = await spotify.getFollowedArtists({ limit: 50 });
        if (res.artists.items) {
          setUserArtists(res.artists.items);
        }
      } catch (error) {
        console.error("Error fetching user's followed artists", error);
        setErrorUserArtists(
          error instanceof Error ? error : new Error("Unknown error")
        );
      } finally {
        setLoadingUserArtists(false);
      }
    };
    if (spotify) {
      fetchUserArtists();
    }
  }, [spotify]);

  return { userArtists, loadingUserArtists, errorUserArtists };
};

export default useUserFollowedArtists;
