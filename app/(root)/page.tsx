"use client";

import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
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
      <div className="flex flex-1 overflow-hidden px-4 gap-x-2">
        <LeftSidebar
          spotify={spotify}
          onSelectPlaylist={setSelectedPlaylistId}
          onSelectLikedSong={setSelectedLikedSongId}
          onSelectAlbum={setSelectedAlbumId}
          onSelectArtist={setSelectedArtistId}
        />
        <main className="flex-1 overflow-auto p-4">Main Component</main>
      </div>
      <div className="h-[100px] bg-player">Player</div>
    </section>
  );
}
