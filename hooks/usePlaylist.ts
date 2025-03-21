"use client";

import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const usePlaylist = ({
  playlistId,
  spotify,
}: {
  playlistId: string;
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
}) => {
  const [playlist, setPlaylist] =
    useState<SpotifyApi.SinglePlaylistResponse | null>(null);
  const [loadingPlaylist, setLoadingPlaylist] = useState(true);
  const [errorPlaylist, setErrorPlaylist] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      if (!playlistId || !spotify || !spotify.getAccessToken()) return;

      try {
        setLoadingPlaylist(true);
        const res = await spotify.getPlaylist(playlistId);
        setPlaylist(res);
      } catch (error) {
        console.error("Error fetching playlist", error);
        setErrorPlaylist(
          error instanceof Error ? error : new Error("Unknown error")
        );
      } finally {
        setLoadingPlaylist(false);
      }
    };

    if (spotify) {
      fetchPlaylist();
    }
  }, [playlistId, spotify]);

  return { playlist, loadingPlaylist, errorPlaylist };
};

export default usePlaylist;
