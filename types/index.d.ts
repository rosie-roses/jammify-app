import { SVGProps } from "react";
import SpotifyWebApi from "spotify-web-api-js";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
};

declare interface LeftSidebarProps {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
  onSelectPlaylist: (playlistId: string | null) => void;
  onSelectLikedSong: (likedSongId: string | null) => void;
  onSelectAlbum: (albumId: string | null) => void;
  onSelectArtist: (artistId: string | null) => void;
}
