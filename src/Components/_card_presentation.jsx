import { Card } from "flowbite-react";
import React from "react";
import portada from "../assets/portada_presentacion.png";
import _buttom_travel from "./_buttom_travel";

export const _card_presentation = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap-reverse sm:flex-row  md:flex-wrap mt-3">
      <Card
        className=" mx-2 my-3 bg-dark sx:w-[250px] sm:w-[500px] md:w-[300px] xl:w-[500px] text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop"
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
        className="bg-dark sx:w-[250px] sm:w-[500px] md:w-[382px] xl:w-[530px] text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 animate-dance-movil border-none"
        href="#"
      >
        <h5 className="text-2xl text-center md:text-4xl my-3 font-bold text-gray-900 ">
          Una comunidad de personas bellas.
        </h5>
        <p className="card p-2 mb-3 border font-normal text-center text-xs xl:text-base text-gray-700 ">
          Este canal es la representación de una pequeña comunidad de
          estudiantes, profesionales y freelancers que se reúnen para compartir
          sus experiencias a través de diversos medios digitales. Nos
          enorgullece estar en compañía de personas tan maravillosas.
        </p>

        <p className="font-semibold text-xs xl:text-base ">
          "Mi única finalidad es que puedas encontrar un espacio donde sentirte
          en compañía, en comodidad y adquieras la constancia que cada día se
          necesita para estar más cerca de aquello que quieres lograr. Seremos
          testigo de cada logro que consigas, sabiendo que el esfuerzo y
          compromiso es tuyo. No nos llevaremos el crédito, pero sí la
          confirmación de que, si tú puedes, nosotros también.
        </p>
        <p className="font-semibold text-xs xl:text-base ">
          Aquí te brindamos un lugar de buenas vibras, fundamentado en el
          respeto, donde podrás compartir tus metas, celebrar tus logros y
          recibir apoyo de la comunidad."
        </p>
        <p className="font-semibold text-xs xl:text-base">
          Mi nombres es Luciano... Chenz para los amigos y te invito a compartir
          nuestras largas jornadas."
        </p>
      </Card>
    </div>
  );
};

export default _card_presentation;
