import React from "react";
import img_1 from "../assets/banner/img_cuarto_1.jpeg";
import img_2 from "../assets/banner/img_cuarto_2.jpeg";
import img_3 from "../assets/banner/img_cuarto_3.jpeg";
import img_4 from "../assets/banner/img_cuarto_4.jpeg";
import img_5 from "../assets/banner/img_cuarto_5.jpeg";
import { Carousel } from "flowbite-react";

const _Carousel = () => {
  return (
    <Carousel className="red" >
      <img
        loading="lazy"
        className="object-bottom z-0 img_corousel"
        src={img_1}
        alt="..."
        style={{ position: "fixed" }}
      />
      <img
        loading="lazy"
        className="object-bottom z-0 img_corousel"
        src={img_2}
        alt="..."
        style={{ position: "fixed" }}
      />
      <img
        loading="lazy"
        className="object-bottom z-0 img_corousel"
        src={img_3}
        alt="..."
        style={{ position: "fixed" }}
      />
      <img
        loading="lazy"
        className="object-bottom z-0 img_corousel"
        src={img_4}
        alt="..."
        style={{ position: "fixed" }}
      />
      <img
        loading="lazy"
        className="object-bottom z-0 img_corousel"
        src={img_5}
        alt="..."
        style={{ position: "fixed" }}
      />
    </Carousel>
  );
};

export default _Carousel;
