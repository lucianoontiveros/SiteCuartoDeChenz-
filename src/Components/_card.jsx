import React from "react";
import tarjeta1 from "../assets/Tarjetas/tarjeta_1.png";
import tarjeta2 from "../assets/Tarjetas/tarjeta_2.png";
import tarjeta3 from "../assets/Tarjetas/tarjeta_3.png";
import tarjeta4 from "../assets/Tarjetas/tarjeta_4.png";

const _card = () => {
  // Integrar directamente los datos JSON en el componente
  const data = [
    {
      title: "HORARIO",
      descripcion: "Conoce nuestros horarios de transmisión",
      tarjeta: tarjeta1,
    },
    {
      title: "NOVEDADES",
      descripcion: "Enterarte de las novedades de nuestra comunidad",
      tarjeta: tarjeta2,
    },
    {
      title: "COMANDOS",
      descripcion: "Estos son los comandos del chat de twitch",
      tarjeta: tarjeta3,
    },
    {
      title: "BLOG",
      descripcion: "Un espacio para comunicar y compartir. Una invitación.",
      tarjeta: tarjeta4,
    },
  ];

  console.log(data);

  data.map((item) => console.log(`"${item.tarjeta}"`));

  return (
    <div className="flex flex-col flex-wrap items-center justify-between sm:flex-row sm:justify-center sm:flex-wrap my-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="card flex flex-col justify-center  my-2 mx-2 w-[250px] h-[200px] sm:w-[280px] md:w-[340px] xl:w-[260px]  animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop items-center bg-gray-900 border-[#D0F8CF] sm:border-[#D6C2F7]"
          style={{
            backgroundImage: `url(${item.tarjeta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 flex flex-col p-5 w-full h-[269px] rounded-xl justify-center items-center text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p>{item.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default _card;
