import React, { Component } from "react";
import "./index.css";
import NormalCard from "./normalCard";
import TippyCard from "./tippyCard";
export default class index extends Component {
  render() {
    return (
      <div className="NavBar">
        <NormalCard
          imgsrc="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          name="Top Offers"
        />
        <TippyCard />
      </div>
    );
  }
}
