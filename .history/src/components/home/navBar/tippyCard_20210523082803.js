import React, { Component } from "react";
import Tippy from "@tippyjs/react";
import FashionToppy from "./fashion/fashionTippy";
export default class tippyCard extends Component {
  render() {
    return (
      <div className="tippyCard">
        <Tippy
          interactive={true}
          theme="light"
          content={<FashionToppy></FashionToppy>}
        >
          <div>
            <div>
              <img src={this.props.imgsrc} height="70px" />
            </div>
            <span className="tippyCardTitle">{this.props.name}</span>
          </div>
        </Tippy>
      </div>
    );
  }
}
