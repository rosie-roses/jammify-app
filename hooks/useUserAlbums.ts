"use client";

import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const useUserAlbums = ({
  spotify,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
}) => {
  const [userAlbums, setUserAlbums] = useState<SpotifyApi.SavedAlbumObject[]>(
    []
  );
  const [loadingUserAlbums, setLoadingUserAlbums] = useState(true);
  const [errorUserAlbums, setErrorUserAlbums] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserAlbums = async () => {
      if (!spotify || !spotify.getAccessToken()) return;

      try {
        setLoadingUserAlbums(true);
        const res = await spotify.getMySavedAlbums({ limit: 50 });
        if (res.items) {
          setUserAlbums(res.items);
        }
      } catch (error) {
        console.error("Error fetching user's saved albums", error);
        setErrorUserAlbums(
          error instanceof Error ? error : new Error("Unknown error")
        );
      } finally {
        setLoadingUserAlbums(false);
      }
    };
    if (spotify) {
      fetchUserAlbums();
    }
  }, [spotify]);

  return { userAlbums, loadingUserAlbums, errorUserAlbums };
};

export default useUserAlbums;
