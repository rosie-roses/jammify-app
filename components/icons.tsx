import * as React from "react";

import { IconSvgProps } from "@/types";

export const GithubIcon: React.FC<IconSvgProps> = ({
  fill,
  size,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      width={size || width}
      viewBox="0 0 496 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export const SpotifyIcon: React.FC<IconSvgProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      width={size || width}
      viewBox="0 0 496 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const SearchIcon: React.FC<IconSvgProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke={fill || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path
        clipRule="evenodd"
        d="m21 21-4.3-4.3"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const UserIcon: React.FC<IconSvgProps> = ({
  fill = "currentColor",
  size,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      width={size || width}
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const LogOutIcon: React.FC<IconSvgProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      width={size || width}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const PlaylistIcon: React.FC<IconSvgProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 12.05C10.8384 12.0172 10.6712 12 10.5 12C9.11929 12 8 13.1193 8 14.5C8 15.8807 9.11929 17 10.5 17C11.8807 17 13 15.8807 13 14.5V10H16V8H11V12.05Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export const AlbumIcon: React.FC<IconSvgProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 16C14.2133 16 16 14.2133 16 12C16 9.78667 14.2133 8 12 8C9.78667 8 8 9.78667 8 12C8 14.2133 9.78667 16 12 16ZM12 11C12.55 11 13 11.45 13 12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export const ArtistIcon: React.FC<IconSvgProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M17.841 15.659L18.017 15.836L18.1945 15.659C19.0732 14.7803 20.4978 14.7803 21.3765 15.659C22.2552 16.5377 22.2552 17.9623 21.3765 18.841L18.0178 22.1997L14.659 18.841C13.7803 17.9623 13.7803 16.5377 14.659 15.659C15.5377 14.7803 16.9623 14.7803 17.841 15.659ZM12 14V22H4C4 17.6651 7.44784 14.1355 11.7508 14.0038L12 14ZM12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export const LikedSongsIcon: React.FC<IconSvgProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export const PlayIcon: React.FC<IconSvgProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export const ClockIcon: React.FC<IconSvgProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
    >
      <path 
        clipRule="evenodd"
        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"
        fill={fill}
        fillRule="evenodd"
      />
      </svg>
  );
};
