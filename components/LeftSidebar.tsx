"use client";

import React, { useState } from "react";
import LikedSongs from "./LikedSongs";
import UserPlaylists from "./UserPlaylists";
import SavedAlbums from "./SavedAlbums";
import FollowedArtists from "./FollowedArtists";
import { LeftSidebarProps } from "@/types";
import { Tab, Tabs } from "@heroui/tabs";
import { AlbumIcon, ArtistIcon, LikedSongsIcon, PlaylistIcon } from "./icons";

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  spotify,
  onSelectPlaylist,
  onSelectLikedSong,
  onSelectAlbum,
  onSelectArtist,
}) => {

  return (
    <div className="bg-content1 p-4 rounded-xl w-[325px] font-sans hidden md:flex flex-col h-full overflow-y-auto">
      <Tabs aria-label="Options" variant="light" radius="full">
        <Tab
          key="playlists"
          title={
            <div className="flex items-center space-x-2">
              <PlaylistIcon size={24} />
              <span>Playlists</span>
            </div>
          }
        >
          <UserPlaylists
            spotify={spotify}
            onSelectPlaylist={(playlistId) => {
              onSelectPlaylist(playlistId);
            }}
          />
        </Tab>
        <Tab
          key="albums"
          title={
            <div className="flex items-center space-x-2">
              <AlbumIcon size={24} />
              <span>Albums</span>
            </div>
          }
        >
          <SavedAlbums spotify={spotify} />
        </Tab>
        <Tab
          key="liked-songs"
          title={
            <div className="flex items-center space-x-2">
              <LikedSongsIcon size={20} />
              <span>Liked Songs</span>
            </div>
          }
        >
          <LikedSongs spotify={spotify} />
        </Tab>
        <Tab
          key="artists"
          title={
            <div className="flex items-center space-x-2">
              <ArtistIcon size={20} />
              <span>Artists</span>
            </div>
          }
        >
          <FollowedArtists spotify={spotify} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default LeftSidebar;
