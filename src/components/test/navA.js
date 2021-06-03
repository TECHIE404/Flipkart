import React, { Component } from "react";
import "./nav-A.css";
class NavA extends Component {
  state = {};
  render(props) {
    return (
      <div>
        <div>
          <img src={this.props.imgsrc} className="photo" alt="unable to load" />
        </div>
        <a href={this.props.href}>{this.props.name}</a>
      </div>
    );
  }
}

export default NavA;
