"use client";

import React, { useEffect, useState } from "react";
import usePlaylist from "@/hooks/usePlaylist";
import { millisToMinutesAndSeconds } from "@/lib/utils";
import { shuffle } from "lodash";
import { useExtractColors } from "react-extract-colors";
import { PlaylistHeaderProps, PlaylistProps } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Button } from "@heroui/button";
import { ClockIcon, PlayIcon } from "./icons";
import { Spinner } from "@heroui/spinner";
import { Alert } from "@heroui/alert";
import { Image } from "@heroui/image";

const colours = ["indigo", "blue", "green", "red", "yellow", "pink", "purple"];

const Header: React.FC<PlaylistHeaderProps> = ({ spotify, playlist }) => {
  const [headerGradient, setHeaderGradient] = useState(shuffle(colours).pop());

  const { dominantColor } = useExtractColors(playlist?.images?.[0]?.url || "");

  useEffect(() => {
    if (dominantColor) {
      setHeaderGradient(
        `linear-gradient(to bottom, ${dominantColor}, #18181b)`
      );
    } else {
      const fallbackColor = shuffle(colours).pop();
      setHeaderGradient(
        `linear-gradient(to bottom, ${fallbackColor}, #18181b)`
      );
    }
  }, [dominantColor]);

  return (
    <section
      style={{ background: headerGradient }}
      className="h-[35%] flex flex-col md:flex-row items-center text-left md:items-end p-6"
    >
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <Image
          width={160}
          height={160}
          radius="sm"
          src={playlist?.images[0].url}
          alt={playlist?.name}
        />
      </div>
      <div className="flex flex-col ml-0 md:ml-5 flex-grow">
        <p className="text-sm font-bold hidden md:flex">
          {playlist?.public ? "Public Playlist" : "Private Playlist"}
        </p>
        <div className="flex w-full items-center">
          <div className="flex-grow pr-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold overflow-ellipsis">
              {playlist?.name}
            </h1>
            <div className="text-sm mt-2">
              <span className="font-bold">{playlist?.owner.display_name}</span>
              <span>
                {" "}
                •{" "}
                {playlist?.followers.total === 1
                  ? playlist.followers.total + " save"
                  : playlist?.followers.total + " saves"}
              </span>
              <span>
                {" "}
                •{" "}
                {playlist?.tracks.total === 1
                  ? playlist?.tracks.total + " song"
                  : playlist?.tracks.total + " songs"}
              </span>
            </div>
          </div>
          <Button
            className="p-2 py-8"
            size="sm"
            radius="full"
            variant="solid"
            color="primary"
          >
            <PlayIcon size={24} color="#18181b" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const isTrack = (track: any): track is SpotifyApi.TrackObjectFull => {
  return (
    (track as SpotifyApi.TrackObjectFull).album !== undefined &&
    (track as SpotifyApi.TrackObjectFull).artists !== undefined
  );
};
const Playlist: React.FC<PlaylistProps> = ({ spotify, selectedPlaylistId }) => {
  if (!selectedPlaylistId) return null;

  const {
    playlist,
    loadingPlaylist: loading,
    errorPlaylist: error,
  } = usePlaylist({ playlistId: selectedPlaylistId, spotify });

  return (
    <div className="w-full overflow-auto">
      {loading && <Spinner className="p-5" color="current" variant="dots" />}
      {error && (
        <Alert
          color="danger"
          variant="faded"
          title="Error fetching playlist"
          description={`${error?.message}`}
          className="m-5 w-[calc(100%-40px)]"
        />
      )}
      {!loading && !error && playlist && (
        <>
          <Header spotify={spotify} playlist={playlist} />
          <div className="p-5 pt-2">
            <Table
              removeWrapper
              aria-label="Playlist table"
              classNames={{
                th: [
                  "text-default-500",
                  "bg-transparent",
                  "text-small",
                  "font-normal",
                  "border-b",
                  "border-divider",
                ],
              }}
              selectionMode="single"
            >
              <TableHeader>
                <TableColumn>#</TableColumn>
                <TableColumn>Title</TableColumn>
                <TableColumn>Album</TableColumn>
                <TableColumn align="end">
                  <ClockIcon
                    fill="currentColor"
                    size={20}
                    className="ml-auto inline-block"
                  />
                </TableColumn>
              </TableHeader>
              <TableBody emptyContent={"No playlist tracks to display"}>
                {playlist.tracks.items.map((obj, i) => (
                  <TableRow key={obj.track.id}>
                    <TableCell className="font-medium text-medium text-default-500">
                      {i + 1}
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      <div className="flex items-center space-x-4">
                        {isTrack(obj.track) ? (
                          <>
                            <Image
                              src={obj.track.album.images[0].url}
                              alt={obj.track.album.name}
                              width={40}
                              height={40}
                              radius="md"
                            />
                            <div className="flex flex-col justify-start w-[calc(100%_-_60px)]">
                              <p className="truncate text-medium">
                                {obj.track.name}
                              </p>
                              <div className="text-default-500 truncate">
                                {obj.track.artists
                                  .map((artist) => artist.name)
                                  .join(", ")}
                              </div>
                            </div>
                          </>
                        ) : (
                          <span>Not a track</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[150px] truncate text-default-500">
                      {isTrack(obj.track)
                        ? obj.track.album.name
                        : "Not Available"}
                    </TableCell>
                    <TableCell className="text-right text-default-500">
                      {isTrack(obj.track)
                        ? millisToMinutesAndSeconds(obj.track.duration_ms)
                        : "N/A"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
      {!loading && !error && !playlist && (
        <Alert
          variant="faded"
          title="No playlist found"
          className="m-5 w-[calc(100%-40px)]"
        />
      )}
    </div>
  );
};

export default Playlist;
