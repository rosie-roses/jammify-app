"use client";

import useUserLikedSongs from "@/hooks/useUserLikedSongs";
import { Alert } from "@heroui/alert";
import { Image } from "@heroui/image";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Spinner } from "@heroui/spinner";
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const LikedSongs = ({
  spotify,
  onSelectLikedSong,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
  onSelectLikedSong?: (likedSongId: string | null) => void;
}) => {
  const {
    userLikedSongs: likedSongs,
    loadingUserLikedSongs: loading,
    errorUserLikedSongs: error,
  } = useUserLikedSongs({ spotify });

  return (
    <ScrollShadow hideScrollBar className="max-w-[400px] h-full" offset={100}>
      {loading && <Spinner color="current" variant="dots" />}
      {error && (
        <Alert
          color="danger"
          variant="faded"
          title="Error fetching user's liked songs"
          description={`${error?.message}`}
        />
      )}
      {!loading && !error && likedSongs.length > 0 && (
        <ul className="space-y-1">
          {likedSongs.map((track) => (
            <li
              key={track.id}
              className="flex flex-row items-center space-x-4 p-2 cursor-pointer hover:bg-content2 rounded-md"
              //   onClick={() => onSelectLikedSong(track.id)}
            >
              <Image
                src={track.album.images[0]?.url}
                alt={track.name}
                width={48}
                height={48}
                radius="md"
              />
              <div className="flex flex-col w-[75%]">
                <p className="text-small font-medium truncate">{track.name}</p>
                <p className="text-default-500 text-tiny truncate">
                  {track.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && likedSongs.length === 0 && (
        <Alert variant="faded" title="No liked songs found" />
      )}
    </ScrollShadow>
  );
};

export default LikedSongs;
