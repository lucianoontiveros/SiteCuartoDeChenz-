import React from "react";
import { Card } from "flowbite-react";

import _buttom_travel from "../Components/_buttom_travel";
import Totoro_image from "../assets/Totoro_article_1.png";
import _bar_media from "../Components/_bar_media";

const About = () => {
  return (
    <header className="container flex flex-col ">
      <article className="flex flex-col md:flex-row ">
        <section
          className="mx-1 flex justify-center "
          id="tarjetas"
        >
          <Card className="max-w-[270px] sx:max-w-sm order-1 bg-dark  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <img
              className="rounded-lg m-0 p-0"
              src={Totoro_image}
              alt="Imagen Articulo"
            />
            <_bar_media />
          </Card>
        </section>
        <section
          id="articulo"
          className="my-5 mx-5 text-xs xl:text-base  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
        >
          <h1 className="text-2xl font-bold mb-2">
            Una gran semana por delante
          </h1>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            07/04/204 for Chenz
          </span>
          <hr className="h-px my-3 bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 border-0"></hr>
          <p className="mt-2">Muy buenas gente bonita,</p>
          <p className="mt-2">
            Feliz día a sus jefes, (Día de los papis en Argentina) y recuerden
            dedicar tiempo a la familia o toda aquella actividad que les permita
            desconectar un poco de lo habitual. No hace falta que me feliciten
            pese a que soy un papucho. Espero que estén teniendo un buen
            comienzo de actividades. Gracias una vez más por su compañía.
          </p>
          <p className="mt-2">
            Les Traigo el cronograma de las emisiones para estos días, luego de
            pasar un mes difícil por muchas cuestiones personales, quedando
            junio para acomodar sensaciones y retornar paulatinamente a la
            normalidad. Estaré todos los días en directo (Sin embargo, mi
            presencia se puede comprometer por algún corte de luz, que
            últimamente se está volviendo recurrente). Martes y miércoles haré
            oficina por la mañana, a excepción del jueves y viernes que me
            encontraré trabajando en casa con ustedes. A tener en cuenta que el
            miércoles tardaré en retornar al directo porque tengo que realizar
            un trámite.
          </p>
          <p className="mt-2">
            Con el ánimo de ser más claro y visual les dejo un resumen aquí:
          </p>
          <ul className="mt-2 mb-2">
            <li>Lunes: con ustedes jornada completa. </li>
            <li>
              Martes: Por la mañana emisión con el bot y mi presencia por la
              tarde.
            </li>
            <li>
              Miércoles: Tengo que realizar unos trasmites luego de trabajar,
              por lo cual voy a tardar en retornar al stream.
            </li>
            <li>Jueves: Trabajo en casa jornada completa con ustedes </li>
            <li>
              Viernes: Trabajo en casa, jornada completa con ustedes jornada
              para enfocarte, quizás sea una buena opción.
            </li>
            <li>
              Sábado: Habrá directo en modo focus, trabajando en un horario
              inusual de 19:00 hasta las 00:00 hs Arg. Si están buscando una
              jornada para enfocarte, quizás sea una buena opción.
            </li>
            <li>Domingo: Turno completo con ustedes. </li>
          </ul>
          <spam className="text-lg">Adelanto importante:</spam>
          <p className="mt-2 mb-2">
            Vayan anotando la fecha 24/06 a las 17:30 porque ese día defiende su
            trabajo final la tía Sabri. Se recibe, y como tal vamos a estar al
            pendiente para festejar con ella.{" "}
          </p>
          <spam className="text-lg">Meditaciones</spam>
          <p className="mt-2 mb-2">
            Si te ausentaste un tiempo y no sabes en qué situación están las
            meditaciones, seguimos realizando las jornadas normales, cerca o
            pasadas las 15:00 ARG. Recordá que de todas maneras siempre me podés
            solicitar meditar y podremos el Bot a tu disposición.{" "}
          </p>
          <spam className="text-lg">Pendientes</spam>
          <p className="mt-2">
            Sé que esto demorado con la subida del video de la jornada especial
            que tuvimos, pero ya tengo apuntado tratarlo este viernes.
          </p>
          <p className="mt-3">
            Sin mucho más que decir, les mando un abrazo y estoy a su
            disposición para lo que necesiten
          </p>
          <p className="mt-2">un abrazo.</p>
          <spam className="mt-3">Chenz</spam>
        </section>
      </article>
    </header>
  );
};

export default About;
