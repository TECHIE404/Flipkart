import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "yellow" }}>
        <div className="img">
          <img src="https://rukminim1.flixcart.com/image/150/150/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=70" />
        </div>
        <div className="ProductName">name</div>
        <div className="Price">price</div>
        <div className="ProductDesc">desc</div>
      </div>
    );
  }
}
