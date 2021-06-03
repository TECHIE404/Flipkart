import React, { Component } from "react";
import Tippy from "@tippyjs/react";
export default class tippyCard extends Component {
  render() {
    return <div>
        <Tippy
             interactive={true}
             theme="light">
            <span>Fashion</span>
        </Tippy>
    </div>;
  }
}
