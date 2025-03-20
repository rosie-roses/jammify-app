"use client";

import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import React from "react";
import {
  AlbumIcon,
  ArtistIcon,
  GithubIcon,
  LikedSongsIcon,
  LogOutIcon,
  PlaylistIcon,
  UserIcon,
} from "./icons";
import { Session } from "next-auth";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { User } from "@heroui/user";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/use-disclosure";
import { Tab, Tabs } from "@heroui/tabs";
import SpotifyWebApi from "spotify-web-api-js";
import { signOut } from "next-auth/react";
import FollowedArtists from "./FollowedArtists";
import LikedSongs from "./LikedSongs";
import SavedAlbums from "./SavedAlbums";
import UserPlaylists from "./UserPlaylists";

const MobileNav = ({
  data,
  spotify,
}: {
  data: Session | null;
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Link onPress={onOpen}>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          name={data?.user.name}
          size="md"
          showFallback
          fallback={
            <UserIcon
              className="animate-pulse text-default-500"
              fill="currentColor"
              size={20}
            />
          }
          src={data?.user.image || ""}
        />
      </Link>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="xs">
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col items-start gap-1">
                <User
                  avatarProps={{
                    src: `${data?.user.image}`,
                    fallback: (
                      <UserIcon
                        className="animate-pulse text-default-500"
                        fill="currentColor"
                        size={20}
                      />
                    ),
                  }}
                  description={data?.user.email}
                  name={data?.user.name}
                />
              </DrawerHeader>
              <DrawerBody className="text-small">
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
                    <UserPlaylists spotify={spotify} />
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
              </DrawerBody>
              <DrawerFooter>
                <Button
                  as={Link}
                  href={"https://github.com/rosie-roses/spotify-clone-app"}
                  target="_blank"
                  startContent={<GithubIcon fill="#d4d4d8" size={24} />}
                  className="font-mono text-tiny"
                >
                  rosie-roses
                </Button>
                <Button
                  endContent={<LogOutIcon size={15} />}
                  color="primary"
                  onPress={() => signOut()}
                  className="text-small"
                >
                  Sign Out
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
