"use client";

import useUserAlbums from "@/hooks/useUserAlbums";
import { Alert } from "@heroui/alert";
import { Image } from "@heroui/image";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Spinner } from "@heroui/spinner";
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const SavedAlbums = ({
  spotify,
  onSelectAlbum,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
  onSelectAlbum?: (albumId: string | null) => void;
}) => {
  const {
    userAlbums: albums,
    loadingUserAlbums: loading,
    errorUserAlbums: error,
  } = useUserAlbums({ spotify });
  return (
    <ScrollShadow hideScrollBar className="max-w-[400px] h-full" offset={100}>
      {loading && <Spinner color="current" variant="dots" />}
      {error && (
        <Alert
          color="danger"
          variant="faded"
          title="Error fetching user's saved albums"
          description={`${error?.message}`}
        />
      )}
      {!loading && !error && albums.length > 0 && (
        <ul className="space-y-1">
          {albums.map(({ album }) => (
            <li
              key={album.id}
              className="flex flex-row items-center space-x-4 p-2 cursor-pointer hover:bg-content2 rounded-md"
              //   onClick={() => onSelectAlbum(album.id)}
            >
              <Image
                src={album.images[0].url}
                alt={album.name}
                width={48}
                height={48}
                radius="md"
              />
              <div className="flex flex-col w-[75%]">
                <p className="text-small font-medium truncate">{album.name}</p>
                <p className="text-default-500 text-tiny truncate">
                  {album.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && albums.length === 0 && (
        <Alert variant="faded" title="No saved albums found" />
      )}
    </ScrollShadow>
  );
};

export default SavedAlbums;
