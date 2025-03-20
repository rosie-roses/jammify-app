"use client";

import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const useUserLikedSongs = ({
  spotify,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
}) => {
  const [userLikedSongs, setUserLikedSongs] = useState<
    SpotifyApi.TrackObjectFull[]
  >([]);
  const [loadingUserLikedSongs, setLoadingUserLikedSongs] = useState(true);
  const [errorUserLikedSongs, setErrorUserLikedSongs] = useState<Error | null>(
    null
  );

  useEffect(() => {
    const fetchUserLikedSongs = async () => {
      if (!spotify || !spotify.getAccessToken()) return;

      try {
        setLoadingUserLikedSongs(true);
        const res = await spotify.getMyTopTracks();
        if (res.items) {
          setUserLikedSongs(res.items);
        }
      } catch (error) {
        console.error("Error fetching user's liked songs", error);
        setErrorUserLikedSongs(
          error instanceof Error ? error : new Error("Unknown error")
        );
      } finally {
        setLoadingUserLikedSongs(false);
      }
    };

    if (spotify) {
      fetchUserLikedSongs();
    }
  }, [spotify]);

  return { userLikedSongs, loadingUserLikedSongs, errorUserLikedSongs };
};

export default useUserLikedSongs;
