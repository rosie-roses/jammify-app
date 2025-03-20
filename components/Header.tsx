"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { GithubIcon, LogOutIcon, SearchIcon, UserIcon } from "./icons";
import { Avatar } from "@heroui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { signOut, useSession } from "next-auth/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import SpotifyWebApi from "spotify-web-api-js";

const Header = ({
  spotify,
}: {
  spotify: SpotifyWebApi.SpotifyWebApiJs | null;
}) => {
  const { data } = useSession();

  const user = data?.user;

  return (
    <header className="p-4 font-sans">
      <Navbar position="static" maxWidth="2xl">
        <NavbarBrand>
          <Image
            alt="Jammify logo"
            className="rounded-none"
            src="/assets/logo.png"
            width={40}
            height={40}
          />
        </NavbarBrand>
        <NavbarContent className="flex gap-4" justify="center">
          <NavbarItem className="sm:w-[500px] w-[150px]">
            <Input
              className="rounded-full"
              classNames={{
                inputWrapper: [
                  "bg-content2",
                  "dark:hover:bg-content3",
                  "focus-within:ring-2",
                  "focus-within:ring-[#e7e7e7]",
                  "dark:group-data-[focus=true]:bg-content2",
                ],
                input: [
                  "placeholder:text-default-500",
                  "placeholder:text-small",
                  "sm:placeholder:text-medium",
                  "ml-2",
                  "text-small",
                  "sm:text-medium",
                ],
              }}
              size="lg"
              radius="full"
              isClearable
              placeholder="What do you want to play?"
              startContent={
                <SearchIcon
                  fill="#a1a1aa"
                  size={24}
                  className="text-2xl pointer-events-none flex-shrink-0"
                />
              }
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <Button
              as={Link}
              href={"https://github.com/rosie-roses/spotify-clone-app"}
              target="_blank"
              startContent={<GithubIcon fill="#d4d4d8" size={24} />}
              className="font-mono text-tiny"
            >
              rosie-roses
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Popover
              classNames={{
                content: ["bg-content2"],
              }}
              offset={12}
              placement="bottom-end"
            >
              <PopoverTrigger>
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
              </PopoverTrigger>
              <PopoverContent className="p-1">
                <Card
                  className="max-w-[200px] border-none bg-transparent"
                  shadow="none"
                >
                  <CardHeader className="justify-between">
                    <div className="flex gap-3">
                      <div className="flex flex-col items-start justify-center">
                        <h4 className="text-small tracking-wider font-semibold text-default-600 break-words w-[calc(100%-30px)]">
                          {data?.user.name}
                        </h4>
                        <h5 className="text-small text-default-500 break-words w-[calc(100%-30px)]">
                          {data?.user.email}
                        </h5>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="p-3 pt-0">
                    <Button
                      endContent={<LogOutIcon size={15} />}
                      color="primary"
                      onPress={() => signOut()}
                      className="text-small"
                    >
                      Sign Out
                    </Button>
                  </CardBody>
                </Card>
              </PopoverContent>
            </Popover>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
