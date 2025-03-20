"use client";

import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const useUserPlaylists = ({
  spotify,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
}) => {
  const [userPlaylists, setUserPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [loadingUserPlaylists, setLoadingUserPlaylists] = useState(true);
  const [errorUserPlaylists, setErrorUserPlaylists] = useState<Error | null>(
    null
  );

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      if (!spotify || !spotify.getAccessToken()) return;

      try {
        setLoadingUserPlaylists(true);
        const res = await spotify.getUserPlaylists();
        if (res.items) {
          setUserPlaylists(res.items);
        }
      } catch (error) {
        console.error("Error fetching user's playlists", error);
        setErrorUserPlaylists(
          error instanceof Error ? error : new Error("Unknown error")
        );
      } finally {
        setLoadingUserPlaylists(false);
      }
    };
    if (spotify) {
      fetchUserPlaylists();
    }
  }, [spotify]);

  return { userPlaylists, loadingUserPlaylists, errorUserPlaylists };
};

export default useUserPlaylists;
