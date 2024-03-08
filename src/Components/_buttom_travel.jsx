"use client";

import { Button } from "flowbite-react";

import React from "react";

const _buttom_travel = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button gradientMonochrome="cyan">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          alt="discord"
        >
          Discord
        </a>
      </Button>
      <Button gradientMonochrome="purple">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          alt="discord"
        >
          Twitch
        </a>
      </Button>
    </div>
  );
};

export default _buttom_travel;
