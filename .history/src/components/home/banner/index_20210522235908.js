import React from "react";
import img1 from "../../../images/home_page/Banner/img1.jpg";
import img2 from "../../../images/home_page/Banner/img2.jpg";
import img3 from "../../../images/home_page/Banner/img3.jpg";
import img4 from "../../../images/home_page/Banner/img4.jpg";
import img5 from "../../../images/home_page/Banner/img5.jpg";
import img6 from "../../../images/home_page/Banner/img6.jpg";
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
      <div className="slider">
        <img src="https://rukminim1.flixcart.com/flap/844/140/image/9d86c78ccdb70839.jpg?q=50" />
      </div>
    );
  }
}

export default Banner;
