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
          <span>Fashion</span>
        </Tippy>
      </div>
    );
  }
}
