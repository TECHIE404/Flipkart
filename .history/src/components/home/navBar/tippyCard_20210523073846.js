import React, { Component } from "react";
import Tippy from "@tippyjs/react";
import FashionToppy from "./fashion/fashionTippy";
export default class tippyCard extends Component {
  render() {
    return (
      <div>
        <Tippy
          interactive={true}
          theme="light"
          content={<FashionToppy></FashionToppy>}
        >
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" />

          <span>Fashion</span>
        </Tippy>
      </div>
    );
  }
}
