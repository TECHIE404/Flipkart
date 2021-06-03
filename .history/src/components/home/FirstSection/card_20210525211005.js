import React, { Component } from "react";
import "./firstsection.css";
class Card extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: "15px" }}>
        <div>
          <img
            src="https://rukminim1.flixcart.com/image/150/150/ka492fk0/tablet/s/y/y/lenovo-za540019in-original-imafrr2unrv8rj9t.jpeg?q=70"
            height="150px"
            width="160px"
          />
        </div>
        <div className="CardName">lenovo Tablets</div>
        <div className="CardPrice">From ₹4,999</div>
        <div className="CardDesc">upto 25.65cm (10.1inch)</div>
      </div>
    );
  }
}

export default Card;
