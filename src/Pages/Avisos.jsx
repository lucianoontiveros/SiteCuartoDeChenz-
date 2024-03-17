import React from "react";
import { Card } from "flowbite-react";

import _buttom_travel from "../Components/_buttom_travel";
import Totoro_article from "../assets/Totoro_article.jpg";
import _bar_media from "../Components/_bar_media";

const About = () => {
  return (
    <header className="container">
      <article className="flex flex-col md:flex-row ">
        <section
          className="mx-1 flex justify-center "
          id="tarjetas"
        >
          <Card className="max-w-[270px] sx:max-w-sm order-1 bg-dark  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <img
              className="rounded-lg m-0 p-0"
              src={Totoro_article}
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
            Que sea un buen comienzo de semana.
          </h1>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            11/03/204 for Chenz
          </span>
          <hr className="h-px my-3 bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 border-0"></hr>
          <p className="mt-2">
            Muy buenas gente bonita, Les escribo simplemente para saludarlos en
            este inicio de semana, esperando que lo que han vivido hasta ahora
            del día haya sido muy positivo para ustedes o al menos tranquilo.
            Como siempre, les agradezco la compañía, no solo la que me hacen
            sentir, sino la que crean con otros miembros de la comunidad.
            Siempre lo voy a destacar, así que mis disculpas sí se torna
            repetitivo.
          </p>
          <p className="mt-2">
            Decirles que la página del canal va bien, de hecho solo un día me
            sentí bastante frustrado con algunas cuestiones, pero que en
            principio, están resueltas. Estimo que la podré terminar esta semana
            o mínimo tener algo presentable que luego iré mejorando.{" "}
          </p>
          <p className="mt-2">
            En cuanto a las emisiones, todo en la normalidad, como se viene
            dando los lunes y los viernes. Y el fin de semana, solo tendremos
            directo el sábado.{" "}
          </p>
          <p className="mt-2">
            Por si te estás integrando de nuevo en estos días, comentarte que
            hubo algunas de las jefas que aprobaron unos finales, lo que me da
            una alegría impresionante, porque creo que todos somos conscientes
            del compromiso que le ponen a la carrera. También fue el cumple de
            Wanda, todavía estas a tiempo de mandarle un mensajito.
          </p>
          <p className="mt-2">
            Para concluir, queremos informarles que hubo algunos trolls de
            discord que entraron al canal para molestar, pero afortunadamente
            los hemos eliminado y bloqueado. Les pedimos que estén atentos y que
            usen el rol de moderador si lo tienen para expulsar y banear a
            quienes no respeten las normas del servidor. Si alguien quiere tener
            ese rol temporalmente en Discord, pueden solicitármelo, ya que nos
            ayuda a mantener la seguridad entre todos. También les comentamos
            que al limpiar esos usuarios, se expulsaron muchas cuentas inactivas
            sin roles del servidor. Pero pueden volver a entrar sin problemas
            porque no fueron vetadas. Solo queríamos tener la lista más ordenada
            para poder hacer un mejor control.
          </p>
          <p className="mt-2">
            Por lo pronto, nuevamente gracias y mis mejores deseos en estos
            días. Un abrazo muy grande.
          </p>
          <h3 className="text-2xl mt-3">Chenz</h3>
        </section>
      </article>
    </header>
  );
};

export default About;
