import React from "react";
import $ from "jquery";
import SeventhSectionImg from "./seventhsectionimg";
import "./seventhsection.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
class SeventhSection extends React.Component {
  constructor(props) {
    super(props);
    this.scrollThree = this.scrollThree.bind(this);
  }

  scrollThree(direction) {
    let far = ($(".image-container-four").width() / 2) * direction;
    let pos = $(".image-container-four").scrollLeft() + far;
    $(".image-container-four").animate({ scrollLeft: pos }, 1000);
  }

  render() {
    let data = this.props.data;
    return (
      <div style={{ backgroundColor: "white", margin: "10px" }}>
        <div className="width1400">
          <div className="margin-top">
            <div className="deals flex space-btw">
              <div>
                <div>
                  <h2>Your Fave Fashion Brands</h2>
                </div>
              </div>
              <div className="viewAll" style={{ marginLeft: "50%" }}>
                <h4>VIEW ALL</h4>
              </div>
            </div>
            <div className="section-one">
              <a
                className="prev-arrow prev"
                onClick={this.scrollThree.bind(null, -1)}
              >
                <div className="LeftArrow">
                  <ArrowBackIosIcon style={{ marginTop: "40px" }} />
                </div>
              </a>
              <div className="image-container-four section-one-img">
                <SeventhSectionImg data={data} />
              </div>
              <a
                className="next-arrow next"
                onClick={this.scrollThree.bind(null, 1)}
              >
                <div className="RightArrow">
                  <ArrowForwardIosIcon style={{ marginTop: "40px" }} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeventhSection;
