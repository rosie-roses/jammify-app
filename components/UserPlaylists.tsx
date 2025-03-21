"use client";

import useUserPlaylists from "@/hooks/useUserPlaylists";
import { Alert } from "@heroui/alert";
import { Image } from "@heroui/image";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Spinner } from "@heroui/spinner";
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const UserPlaylists = ({
  spotify,
  onSelectPlaylist,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
  onSelectPlaylist: (playlistId: string | null) => void;
}) => {
  const {
    userPlaylists: playlists,
    loadingUserPlaylists: loading,
    errorUserPlaylists: error,
  } = useUserPlaylists({ spotify });

  return (
    <ScrollShadow hideScrollBar className="max-w-[400px] h-full" offset={100}>
      {loading && <Spinner color="current" variant="dots" />}
      {error && (
        <Alert
          color="danger"
          variant="faded"
          title="Error fetching user's playlists"
          description={`${error?.message}`}
        />
      )}
      {!loading && !error && playlists.length > 0 && (
        <ul className="space-y-1">
          {playlists.map((playlist) => (
            <li
              key={playlist.id}
              className="flex flex-row items-center space-x-4 p-2 cursor-pointer hover:bg-content2 rounded-md"
              onClick={() => onSelectPlaylist(playlist.id)}
            >
              <Image
                src={playlist.images[0].url}
                alt={playlist.name}
                width={48}
                height={48}
                radius="md"
              />
              <div className="flex flex-col w-[75%]">
                <p className="text-medium font-medium truncate">
                  {playlist.name}
                </p>
                <p className="text-default-500 text-small truncate">
                  {playlist.owner.display_name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && playlists.length === 0 && (
        <Alert variant="faded" title="No playlists found" />
      )}
    </ScrollShadow>
  );
};

export default UserPlaylists;
