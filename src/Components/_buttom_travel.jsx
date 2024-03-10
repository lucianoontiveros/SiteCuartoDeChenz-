"use client";

import { Button } from "flowbite-react";

import React from "react";

const _buttom_travel = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button gradientMonochrome="cyan">
        <a
          href="https://discord.gg/UdU3wvpWu7 "
          target="_blank"
          rel="noopener noreferrer"
          alt="discord"
        >
          Discord
        </a>
      </Button>
      <Button gradientMonochrome="purple">
        <a
          href="https://www.twitch.tv/cuartodechenz"
          target="_blank"
          rel="noopener noreferrer"
          alt="Twitch"
        >
          Twitch
        </a>
      </Button>
    </div>
  );
};

export default _buttom_travel;
