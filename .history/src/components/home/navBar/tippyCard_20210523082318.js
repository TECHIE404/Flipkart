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
          <div>
            <div>
              <img
                src=
                height="70px"
              />
            </div>
            <span className="tippyCardTitle"></span>
          </div>
        </Tippy>
      </div>
    );
  }
}
