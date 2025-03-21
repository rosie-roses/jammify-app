"use client";

import { MainComponentProps } from "@/types";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { useSession } from "next-auth/react";
import React from "react";
import Playlist from "./Playlist";

const MainComponent: React.FC<MainComponentProps> = ({
  spotify,
  selectedPlaylistId,
}) => {
  const { data } = useSession();
  return (
    <div className="bg-content1 rounded-xl font-sans flex flex-1 flex-col h-full overflow-y-auto">
      <ScrollShadow hideScrollBar className="w-full h-full" offset={100}>
        {selectedPlaylistId ? (
          <Playlist spotify={spotify} selectedPlaylistId={selectedPlaylistId} />
        ) : (
          <div className="p-5">
            <p className="text-medium">
              Welcome,{" "}
              <span>
                {data?.user.name || "Music Lover"}
              </span>
              !
            </p>
            <p className="mt-4">
              Start by selecting a playlist, album, or artist, or try searching
              for your favourite music.
            </p>
          </div>
        )}
      </ScrollShadow>
    </div>
  );
};

export default MainComponent;
