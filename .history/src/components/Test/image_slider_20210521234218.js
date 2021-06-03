import React, { useState } from "react";
import "./image_slider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderData } from "../../images/horizonalList/data";

import img1 from '../../images/home/banner/banner1.jpg';
import img2 from '../../images/home/banner/banner2.jpg';
import img3 from '../../images/home/banner/banner3.jpg';
import img4 from '../../images/home/banner/banner4.jpg';
import img5 from '../../images/home/banner/banner5.jpg';
import img6 from '../../images/home/banner/banner6.jpg';

const Image_slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Image_slider;
