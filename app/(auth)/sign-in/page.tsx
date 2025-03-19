"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { SpotifyIcon } from "@/components/icons";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const handleSpotifyLogin = () => {
    signIn("spotify", {
      callbackUrl: "/",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <Card className="py-4 bg-background">
        <CardHeader className="overflow-visible py-2 flex-col items-center">
          <Image
            alt="Jammify logo"
            className="object-cover rounded-xl"
            src="/assets/banner.png"
            width={270}
          />
        </CardHeader>
        <CardBody className="pb-0 pt-2 px-4 flex-col items-center text-foreground">
          <p>Your personalised music experience powered by Spotify.</p>
          <Button
            onPress={handleSpotifyLogin}
            color="primary"
            startContent={<SpotifyIcon size={24} />}
            className="mt-10 font-mono flex items-center"
          >
            Sign In with Spotify
          </Button>
        </CardBody>
      </Card>
    </section>
  );
};

export default SignIn;
