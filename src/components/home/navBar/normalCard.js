import React, { Component } from "react";
import "./index.css";
export default class normalCard extends Component {
  render() {
    return (
      <div className="normalCard">
        <div className="normalCardImage">
          <img src={this.props.imgsrc} height="60px" />
        </div>
        <div className="normalCardTitle">{this.props.name}</div>
      </div>
    );
  }
}
