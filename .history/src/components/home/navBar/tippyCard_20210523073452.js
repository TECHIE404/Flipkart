import React, { Component } from "react";
import Tippy from "@tippyjs/react";
import FashionToppy from "./fashion/fashionTippy";
export default class tippyCard extends Component {
  render() {
    return (
      <div>
        <Tippy interactive={true} theme="light" con>
          <span>Fashion</span>
        </Tippy>
      </div>
    );
  }
}
