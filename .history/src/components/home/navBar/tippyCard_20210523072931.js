import React, { Component } from "react";
import Tippy from "@tippyjs/react";
export default class tippyCard extends Component {
  render() {
    return <div>
        <Tippy>
            <div></div>
            <span></span>
        </Tippy>
    </div>;
  }
}
