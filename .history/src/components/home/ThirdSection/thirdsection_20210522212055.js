import React from "react";
import $ from "jquery";
import ThirdSectionImg from "./thirdsectionimg";

class ThirdSection extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTwo = this.scrollTwo.bind(this);
  }

  scrollTwo(direction) {
    let far = ($(".image-container-two").width() / 2) * direction;
    let pos = $(".image-container-two").scrollLeft() + far;
    $(".image-container-two").animate({ scrollLeft: pos }, 1000);
  }

  render() {
    let data = this.props.data;
    return (
      <div>
        <img src="https://rukminim1.flixcart.com/flap/100/14/image/4789bc3aefd54494.jpg?q=50" />
      </div>
    );
  }
}

export default ThirdSection;
