import React, { useState } from "react";
import "./image_slider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderData } from "../../images/horizonalList/data";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import img1 from "../../images/home/banner/banner1.jpg";
import img2 from "../../images/home/banner/banner2.jpg";
import img3 from "../../images/home/banner/banner3.jpg";
import img4 from "../../images/home/banner/banner4.jpg";
import img5 from "../../images/home/banner/banner5.jpg";
import img6 from "../../images/home/banner/banner6.jpg";

const LeftArrow = (props) => {
  return (
    <div
      className="blackArrow arrow-back"
      onClick={props.goToPreSlide}
      style={{
        position: "absolute",
        top: "30%",
        left: "0px",
        zIndex: "999",
        color: "black",
        paddingTop: "40px",
        paddingBottom: "25px",
      }}
    >
      <div style={{ width: "14.6px", height: "27", marginLeft: "30px" }}>
        <ChevronLeftIcon />
      </div>
    </div>
  );
};

const RightArrow = (props) => {
  return (
    <div
      className="nextArrow arrow-next"
      onClick={props.goToNextSlide}
      style={{
        position: "absolute",
        top: "30%",
        right: "0px",
        zIndex: "999",
        color: "black",
        paddingTop: "40px",
        paddingBottom: "25px",
      }}
    >
      <div style={{ width: "14.6px", height: "27", marginRight: "30px" }}>
        <ChevronRightIcon />
      </div>
    </div>
  );
};

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
            backgroundPosition: "center",
            display: "inline-block",
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>
        <LeftArrow goToPreSlide={this.goToPreSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Image_slider;

class Banner extends React.Component {
  constructor() {
      super()

      this.state = {
          images: [ img1, img2, img3, img4, img5, img6],
          currentIndex: 0,
          translateValue: 0
      }
  }

  goToPrevSlide = () => {
      if (this.state.currentIndex === 0)
          return;

      this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + this.slideWidth()
      }))
  }

  goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (this.state.currentIndex === this.state.images.length - 1) {
          return this.setState({
              currentIndex: 0,
              translateValue: 0
          })
      }

      // This will not run if we met the if condition above
      this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -(this.slideWidth())
      }));
  }

  slideWidth = () => {
      return document.querySelector('.slide').clientWidth
  }

  render() {
      return (
          <div className="slider">

              <div className="slider-wrapper"
                  style={{
                      transform: `translateX(${this.state.translateValue}px)`,
                      transition: 'transform ease-out 0.45s'
                  }}>
                  {
                      this.state.images.map((image, i) => (
                          <Slide key={i} image={image} />
                      ))
                  }
              </div>

              <LeftArrow
                  goToPrevSlide={this.goToPrevSlide}
              />

              <RightArrow
                  goToNextSlide={this.goToNextSlide}
              />
          </div>
      );
  }
}


const Slide = ({ image }) => {
  const styles = {
      backgroundImage: `url(${image})`,
      backgroundPosition: "center center"
  }
  return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
  return (
      <div className="backArrow arrow-back" onClick={props.goToPrevSlide}>
          <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg>
      </div>
  );
}


const RightArrow = (props) => {
  return (
      <div className="nextArrow arrow-next" onClick={props.goToNextSlide}>
          <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_2gp_O1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg>
      </div>
  );
}



export default Banner