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

class Image_slider extends Component {
  constructor(){
    super();
    this.state={
      images:[img1, img2, img3, img4, img5, img6],
      currentIndex:0,
      translateValue:0,
    }
  }
  render() { 
    return ( 
      <div className="slider">
        <div className="slider-wrapper">
          {
            this.state.images.map((image,i)=>{
              <Slide key={i} image={image}/>
            })
          }
        </div>
          <LeftArrow goToPreSlide={this.goToPreSlide}/>
          <RightArrow goToNextSlide={this.goToNextSlide}/>
      </div>
    );
  }
}
 
export default Image_slider;

