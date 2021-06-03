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
        <NormalCard
          imgsrc="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          name="Grocery"
        />
        <NormalCard
          imgsrc="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          name="Mobiles"
        />
        <NormalCard
          imgsrc="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
          name="Travel"
        />
        <NormalCard
          imgsrc="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
          name="Beauty, Toys & More"
        />
        <TippyCard />
      </div>
    );
  }
}
