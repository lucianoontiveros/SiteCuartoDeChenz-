import React from "react";
import img_1 from "../assets/banner/img_cuarto_1.jpeg";
import img_2 from "../assets/banner/img_cuarto_2.jpeg";
import img_3 from "../assets/banner/img_cuarto_3.jpeg";
import img_4 from "../assets/banner/img_cuarto_4.jpeg";
import img_5 from "../assets/banner/img_cuarto_5.jpeg";
import { Carousel } from "flowbite-react";

const _Carousel = () => {
  return (
    <Carousel>
      <img
        className="object-bottom z-0"
        src={img_1}
        alt="..."
      />
      <img
        className="fill-slate-700 object-bottom z-0"
        src={img_2}
        alt="..."
      />
      <img
        className=" object-bottom z-0"
        src={img_3}
        alt="..."
      />
      <img
        className=" object-bottom z-0"
        src={img_4}
        alt="..."
      />
      <img
        className=" object-bottom z-0"
        src={img_5}
        alt="..."
      />
    </Carousel>
  );
};

export default _Carousel;
