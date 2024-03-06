import { Card } from "flowbite-react";
import React from "react";

export const _card_presentation = () => {
  return (
    <div className="flex flex-wrap sm:flex-row ">
      <Card
        className="w-[265px]  card animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop"
        renderImage={() => (
          <img
            width={500}
            height={500}
            src=""
            alt="image 1"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      <Card
        href="#"
        className="card w-[265px]  mx-3 mt-3 sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default _card_presentation;
