import React from "react";
import img1 from "../../../images/home/banner/banner1.jpg";
import img2 from "../../../images/home/banner/banner2.jpg";
import img3 from "../../../images/home/banner/banner3.jpg";
import img4 from "../../../images/home/banner/banner4.jpg";
import img5 from "../../../images/home/banner/banner5.jpg";
import img6 from "../../../images/home/banner/banner6.jpg";

import "./index.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

class Banner extends React.Component {
  constructor() {
    super();

    this.state = {
      images: [img1, img2, img3, img4, img5, img6],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="slider"></div>
      </div>
    );
  }
}

export default Banner;
