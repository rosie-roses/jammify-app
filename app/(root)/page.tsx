"use client";

import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import useSpotify from "@/hooks/useSpotify";
import { useState } from "react";

export default function Home() {
  const spotify = useSpotify();
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(
    null
  );
  const [selectedLikedSongId, setSelectedLikedSongId] = useState<string | null>(
    null
  );
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);
  const [selectArtistId, setSelectedArtistId] = useState<string | null>(null);

  return (
    <section className="flex flex-col h-screen">
      <Header spotify={spotify} />
      <div className="flex flex-1 overflow-hidden px-4 gap-x-2 justify-start">
        <LeftSidebar
          spotify={spotify}
          onSelectPlaylist={setSelectedPlaylistId}
          onSelectLikedSong={setSelectedLikedSongId}
          onSelectAlbum={setSelectedAlbumId}
          onSelectArtist={setSelectedArtistId}
        />
          <MainComponent
            spotify={spotify}
            selectedPlaylistId={selectedPlaylistId}
          />
      </div>
      <div className="h-[100px] bg-player">Player</div>
    </section>
  );
}
