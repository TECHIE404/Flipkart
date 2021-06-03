import React, { Component } from "react";
import "./index.css";
import normalCard from "./normalCard";
import tippyCard from "./tippyCard";
export default class index extends Component {
  render() {
    return (
      <div className="NavBar">
        <normalCard />
        <tippyCard />
      </div>
    );
  }
}
