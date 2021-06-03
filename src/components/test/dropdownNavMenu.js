import React, { Component } from "react";

import "./dropdownNavMenu.css";
class DropDownNavMenu extends Component {
  state = {};
  render(props) {
    return (
      <div class="dropdown">
        <img
          src={this.props.imgsrc}
          alt="unable to load img"
          className="imgdropdown"
        />
        <button class="dropbtn">
          {this.props.name}
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <h3>Category 1</h3>
              <a href="https://www.flipkart.com/">Men's Top wear</a>
              <a href="https://www.flipkart.com/">Men's Bottom Wear</a>
              <a href="https://www.flipkart.com/">Women-western</a>
              <a href="https://www.flipkart.com/">Women Ethnic</a>
              <a href="https://www.flipkart.com/">men Footwear</a>
              <a href="https://www.flipkart.com/">Watches and Accessories</a>
              <a href="https://www.flipkart.com/">
                Bags, Suitcases and Luggage
              </a>
              <a href="https://www.flipkart.com/">Kids</a>
              <a href="https://www.flipkart.com/">Essentials</a>
              <a href="https://www.flipkart.com/">Winter</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDownNavMenu;
