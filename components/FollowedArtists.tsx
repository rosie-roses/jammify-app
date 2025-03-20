"use client";

import useUserFollowedArtists from "@/hooks/useUserFollowedArtists";
import { Alert } from "@heroui/alert";
import { Image } from "@heroui/image";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Spinner } from "@heroui/spinner";
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const FollowedArtists = ({
  spotify,
  onSelectArtist,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
  onSelectArtist?: (artistId: string | null) => void;
}) => {
  const {
    userArtists: followedArtists,
    loadingUserArtists: loading,
    errorUserArtists: error,
  } = useUserFollowedArtists({ spotify });
  return (
    <ScrollShadow hideScrollBar className="max-w-[400px] h-full" offset={100}>
      {loading && <Spinner color="current" variant="dots" />}
      {error && (
        <Alert
          color="danger"
          variant="faded"
          title="Error fetching user's followed artists"
          description={`${error?.message}`}
        />
      )}
      {!loading && !error && followedArtists.length > 0 && (
        <ul className="space-y-1">
          {followedArtists.map((artist) => (
            <li
              key={artist.id}
              className="flex flex-row items-center space-x-4 p-2 cursor-pointer hover:bg-bg-content2 rounded-md"
              //   onClick={() => onSelectArtist(artist.id)}
            >
              <Image
                src={artist.images[0].url}
                alt={artist.name}
                width={48}
                height={48}
                radius="full"
              />
              <div className="flex flex-col w-[75%]">
                <p className="text-small font-medium truncate">{artist.name}</p>
                <p className="text-default-500 text-tiny truncate">
                  {artist.genres.map((genre) => genre).join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && followedArtists.length === 0 && (
        <Alert variant="faded" title="No followed artists found" />
      )}
    </ScrollShadow>
  );
};

export default FollowedArtists;
