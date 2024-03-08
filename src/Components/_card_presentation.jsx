import { Card } from "flowbite-react";
import React from "react";
import portada from "../assets/portada_presentacion.png";
import _buttom_travel from "./_buttom_travel";

export const _card_presentation = () => {
  return (
    <div className="flex flex-col justify-center  items-center sm:flex-row sm:flex-wrap  mt-3">
      <Card
        className=" mx-2 my-3 bg-dark w-[250px] sm:w-[500px] md:w-[300px] xl:w-[500px] text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop"
        renderImage={() => (
          <img
            width={500}
            height={500}
            src={portada}
            alt="Portada presentación"
          />
        )}
      >
        <h5 className="text-2xl font-bold text-gray-900">
          ¿Ya eres parte de la familia?
        </h5>
        <p className="font-normal text-gray-700 ">Está es tu comunidad.</p>
        <_buttom_travel />
      </Card>
      <Card
        className="bg-dark w-[250px] sm:w-[350px] md:w-[382px] xl:w-[530px] text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 animate-dance-movil border-none"
        href="#"
      >
        <h5 className="text-2xl my-3 font-bold text-gray-900 ">
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
