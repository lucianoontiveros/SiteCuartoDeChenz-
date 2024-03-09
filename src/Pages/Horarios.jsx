import React from "react";
import { Card } from "flowbite-react";
import Totoro_off from "../assets/Totoro_off.jpg";
import Totoro_on from "../assets/Totoro_on.jpg";

const Horarios = () => {
  return (
    <article className="flex flex-col items-center">
      <header className=" sm:max-w-3xl w-full  p-3">
        <Card
          href="#"
          className="border-none  bg-black mb-2 text-sm xl:text-lg text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue "
        >
          <h5 className="text-center text-2xl font-bold tracking-tight">
            Tenemos dos modalidades de emisión.
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Los directos se gestionan con dos horarios de acuerdo a las
            actividades del streamer. Por la mañana, el canal emite con la
            asistencia de un bot configurado para gestionar tareas y realizar
            otras interacciones, respetando por supuesto los 60 minutos de
            productividad y 10 minutos de descansos. Llegada la tarde, Chenz
            regresa de trabajar y se hace cargo de la emisión.
          </p>
        </Card>
      </header>
      <section className="container flex justify-center flex-wrap p-2">
        <div>
          <Card className="bg-cyan-950 max-w-sm mx-1 mb-2 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop">
            <img
              className="rounded-lg"
              width={500}
              height={200}
              src={Totoro_on}
              alt="image 1"
            />
            <h5 className="text-center text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Directos por la Mañana
            </h5>
            <div className="flex items-baseline text-skyBlue">
              En la mañana, Chenz se encuentra trabajando por lo cual el stream
              automaticamente se gestiona manteniendo los tiempos productivos y
              los descansos.
            </div>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
            </ul>
          </Card>
        </div>
        <div>
          <Card className="bg-slate-800 max-w-sm mx-1 mb-2 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop">
            <img
              className="rounded-lg"
              width={500}
              height={200}
              src={Totoro_off}
              alt="image 1"
            />
            <h5 className="text-center text-skyBlue sm:text-mintGreen md:text-indigo-300  xl:text-green-200 mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Directos por la Tarde
            </h5>
            <div className="flex items-baseline text-skyBlue">
              Por la tarde, Chenz comienza a participar de los directo jugando e
              interactuando en los descansos por lo que resta de los pomos.
            </div>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </article>
  );
};

export default Horarios;
