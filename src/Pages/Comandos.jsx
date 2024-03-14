import React from "react";
import _card_gallery from "../Components/_card_gallery";
import abrechetada from "../assets/gallery/abrachetada.png";
import abuscarla from "../assets/gallery/abuscarla.png";

const Comandos = () => {
  return (
    <div className="container flex justify-center flex-wrap sm:grid grid-cols-2 md:grid-cols-4 gap-4 px-6 ">
      <_card_gallery image={abrechetada} />
      <_card_gallery image={abuscarla} />
      <_card_gallery image={abrechetada} />
      <_card_gallery image={abrechetada} />
      <_card_gallery image={abrechetada} />
      <_card_gallery image={abrechetada} />
      <_card_gallery image={abrechetada} />
      <_card_gallery image={abrechetada} />
    </div>
  );
};
export default Comandos;
