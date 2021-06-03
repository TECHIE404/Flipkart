import React, { Component } from "react";
import "./index.css";
import NormalCard from "./normalCard";
import TippyCard from "./tippyCard";
export default class index extends Component {
  render() {
    return (
      <div className="NavBar">
        <NormalCard />
        <TippyCard />
      </div>
    );
  }
}
