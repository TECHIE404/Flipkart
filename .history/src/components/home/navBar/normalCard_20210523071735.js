import React, { Component } from "react";
import "./index.css";
export default class normalCard extends Component {
  render() {
    return (
      <div className="normalCard">
        <div className="normalCardImage">
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            height="70px"
          />
        </div>
        <div className="normalCardTitle">Top Offers</div>
      </div>
    );
  }
}
