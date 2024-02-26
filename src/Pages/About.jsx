import React from "react";
import iconReact from "../assets/iconReact.png";
import iconTailwind from "../assets/iconTailwind.png";
import iconVite from "../assets/iconVite.png";
import iconFlowbite from "../assets/iconFlowbite.png";
import iconRoute from "../assets/iconRoute.png";
import iconX from "../assets/iconX.png";
import iconInsta from "../assets/iconInsta.png";
import iconGitHub from "../assets/iconGitHub.png";
import iconTwitch from "../assets/iconTwitch.png";
import iconThreads from "../assets/iconThreads.png";
import iconDiscord from "../assets/iconDiscord.png";

const About = () => {
  return (
    <div className="container flex flex-wrap-reverse justify-around items-center">
      {/* Resumen de tecnologías */}
      <div className="w-[80%] md:max-w-[70%] ">
        <h1 className="text-white text-center text-4xl mt-4 mb-4">
          Teconologías utilizandas
        </h1>
        <ol className="relative border-s  border-gray-200 dark:border-gray-700">
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              versión 2.3.0 fue lanzada después de Tailwind.
            </time>
            <h3 className="text-lg font-semibold text-white">Flowbite</h3>
            <p className="text-base  text-green-500 ">
              Flowbite es una biblioteca de componentes de interfaz de usuario
              basada en Tailwind CSS y JavaScript. Proporciona una serie de
              componentes de interfaz de usuario listos para usar que puedes
              utilizar para construir rápidamente interfaces de usuario modernas
              y atractivas.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              5 de enero de 2024.
            </time>
            <h3 className="text-lg font-semibold text-white">Tailwind CSS.</h3>
            <p className="text-base  text-green-500 ">
              Tailwind CSS es un marco de CSS de código abierto que, a
              diferencia de otros marcos de CSS como Bootstrap, no proporciona
              una serie de clases predefinidas para elementos como botones o
              tablas. En su lugar, crea una lista de clases CSS de “utilidad”
              que se pueden usar para dar estilo a cada elemento mezclando y
              combinando.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              16 de febrero de 2021.
            </time>
            <h3 className="text-lg font-semibold text-white">Vite.</h3>
            <p className="text-base  text-green-500 ">
              Vite es una herramienta de construcción que proporciona una
              experiencia de desarrollo más rápida y eficiente para proyectos
              web modernos. Proporciona un servidor de desarrollo con Hot Module
              Replacement (HMR) extremadamente rápido y un comando de
              construcción que agrupa tu código con Rollup, preconfigurado para
              generar activos estáticos altamente optimizados para producción.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              Comienzo del desarrollo en Abril del 2013.
            </time>
            <h3 className="text-lg font-semibold text-white">React Router.</h3>
            <p className="text-base  text-green-500 ">
              React Router es una biblioteca estándar para el enrutamiento en
              React. Permite la navegación entre vistas de varios componentes en
              una aplicación React, permite cambiar la URL del navegador y
              mantiene la interfaz de usuario sincronizada con la URL.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              29 de mayo de 2013.
            </time>
            <h3 className="text-lg font-semibold text-white">React.</h3>
            <p className="text-base  text-green-500 ">
              React es una biblioteca de JavaScript para construir interfaces de
              usuario. Permite la creación de componentes de UI reutilizables y
              maneja eficientemente la actualización y renderizado de estos
              componentes.
            </p>
          </li>
        </ol>
      </div>

      {/* Información de versiones y enlaces */}
      <div className="sm:bg-gray-600 h-[80vh] justify-center  sm:rounded-lg flex flex-col sm:min-w-[400px] items-center my-5">
        {/* versiones */}
        <div className="w-[220px] mb-5">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* React version */}
            <li className="items-center min-w-[200px]">
              <div className="flex items-center space-x-4 rtl:space-x-reverse my-3">
                <div className="flex-shrink-0 ">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={iconReact}
                    alt="React versión"
                  />
                </div>
                <div className="flex-1 text-center min-w-0">
                  <p className="text-xl text-white font-medium  truncat">
                    React
                  </p>
                  <p className="text-sm font-bold text-green-500 truncate dark:text-gray-400">
                    v18.2.0
                  </p>
                </div>
              </div>
            </li>

            {/* Vite React Router */}
            <li className="items-center min-w-[200px]">
              <div className="flex items-center space-x-4 rtl:space-x-reverse my-3">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={iconRoute}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 text-center min-w-0">
                  <p className="text-xl text-white font-medium  truncat">
                    React Router
                  </p>
                  <p className="text-sm font-bold text-green-500 truncate dark:text-gray-400">
                    v.6.4
                  </p>
                </div>
              </div>
            </li>

            {/* Vite version */}
            <li className="items-center min-w-[200px]">
              <div className="flex items-center space-x-4 rtl:space-x-reverse my-3">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={iconVite}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 text-center min-w-0">
                  <p className="text-xl text-white font-medium  truncat">
                    Vite
                  </p>
                  <p className="text-sm font-bold text-green-500 truncate dark:text-gray-400">
                    v5.1.0
                  </p>
                </div>
              </div>
            </li>

            {/* Tailwind version */}
            <li className="items-center min-w-[200px]">
              <div className="flex items-center space-x-4 rtl:space-x-reverse my-3">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={iconTailwind}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 text-center min-w-0">
                  <p className="text-xl text-white font-medium  truncat">
                    Tailwind
                  </p>
                  <p className="text-sm font-bold text-green-500 truncate dark:text-gray-400">
                    v3.4.1
                  </p>
                </div>
              </div>
            </li>

            {/* Vite Flowbite */}
            <li className="items-center min-w-[200px]">
              <div className="flex items-center space-x-4 rtl:space-x-reverse my-3">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={iconFlowbite}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 text-center min-w-0">
                  <p className="text-xl text-white font-medium  truncat">
                    Flowbite
                  </p>
                  <p className="text-sm font-bold text-green-500 truncate dark:text-gray-400">
                    v2.3.0
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col max-h-[50px] max-w-[400px] flex-wrap my-2 items-center">
          <div>
            <a href="https://twitter.com/AgustnOntivero6">
              <img
                className="h-auto rounded-lg mx-1 my-1 max-w-[30px] "
                src={iconX}
                alt="X"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/luciano.a.ontiveros/">
              <img
                className="h-auto max-w-[30px] rounded-lg mx-1 my-1"
                src={iconInsta}
                alt="Instagram"
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/lucianoontiveros">
              <img
                className="h-auto max-w-[30px] rounded-lg mx-1 my-1"
                src={iconGitHub}
                alt="GitHub"
              />
            </a>
          </div>
          <div>
            <a href="https://twitch.tv/cuartodechenz">
              <img
                className="h-auto max-w-[30px] rounded-lg mx-1 my-1"
                src={iconTwitch}
                alt="Twitch"
              />
            </a>
          </div>
          <div>
            <a href="https://www.threads.net/@luciano.a.ontiveros?hl=es-la">
              <img
                className="h-auto max-w-[30px] rounded-lg mx-1 my-1"
                src={iconThreads}
                alt="Threads"
              />
            </a>
          </div>
          <div>
            <a href="https://discord.gg/UdU3wvpWu7">
              <img
                className="h-auto max-w-[30px] rounded-lg mx-1 my-1"
                src={iconDiscord}
                alt="Discord"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
