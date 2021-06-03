import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  render() {
    return (
      <div className="index">
        <div className="img">
          <img
            src="https://rukminim1.flixcart.com/image/150/150/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=70"
            style={{ height: "150px" }}
          />
        </div>
        <div className="ProductName">T-shirt</div>
        <div className="Price">Min 70% off</div>
        <div className="ProductDesc">Buy Now! </div>
      </div>
    );
  }
}
