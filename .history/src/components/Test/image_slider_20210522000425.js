import React, { useState } from "react";
import "./image_slider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderData } from "../../images/horizonalList/data";

import img1 from "../../images/home/banner/banner1.jpg";
import img2 from "../../images/home/banner/banner2.jpg";
import img3 from "../../images/home/banner/banner3.jpg";
import img4 from "../../images/home/banner/banner4.jpg";
import img5 from "../../images/home/banner/banner5.jpg";
import img6 from "../../images/home/banner/banner6.jpg";

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center center",
  }
  return <div className="slide" style={styles}></div>;
};

const LeftArrow=(props)=>{
  return (
    <div className="blackArrow arrow-back" onClick={props.goToPreSlide}>
      
    </div>
  );
}
class Image_slider extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [img1, img2, img3, img4, img5, img6],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  goToPreSlide = () => {
    if (this.state.currentIndex === 0) {
      return;
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };
  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };
  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0..45",
          }}
        >
          {this.state.images.map((image, i) => {
            <Slide key={i} image={image} />;
          })}
        </div>
        <LeftArrow goToPreSlide={this.goToPreSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Image_slider;
