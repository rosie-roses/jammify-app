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
import { Code } from "@heroui/code";

const Header = () => {
  const { data } = useSession();

  const user = data?.user;
  return (
    <header className="flex flex-row w-full items-center p-4 px-6 gap-x-4 justify-between font-sans">
      <Image
        alt="Jammify logo"
        className="rounded-xl"
        src="/assets/logo.png"
        width={45}
        height={45}
      />
      <div className="max-w-[500px] w-[500px] max-md:w-[200px]">
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
              "placeholder:text-medium",
              "ml-2",
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
      </div>
      <div className="flex flex-row items-center gap-5">
        <Button
          as={Link}
          href={"https://github.com/rosie-roses/spotify-clone-app"}
          target="_blank"
          variant="light"
          isIconOnly
          className="max-md:hidden"
        >
          <GithubIcon fill="#d4d4d8" size={24} />
        </Button>
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
                  endContent={<LogOutIcon size={16} />}
                  color="primary"
                  onPress={() => signOut()}
                  className="font-mono text-small"
                >
                  Sign Out
                </Button>
                <Link
                  className="md:hidden"
                  href={"https://github.com/rosie-roses/spotify-clone-app"}
                  target="_blank"
                >
                  <Code
                    className="mt-3 flex flex-row font-mono text-small"
                    color="primary"
                  >
                    made by rosie-roses
                  </Code>
                </Link>
              </CardBody>
            </Card>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
