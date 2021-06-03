import React from "react";
import $ from "jquery";
import NinethSectionImg from "./ninethsectionimg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

class NinethSection extends React.Component {
  constructor() {
    super();
    this.scrollThree = this.scrollThree.bind(this);
  }

  scrollThree(direction) {
    let far = ($(".image-container-six").width() / 2) * direction;
    let pos = $(".image-container-six").scrollLeft() + far;
    $(".image-container-six").animate({ scrollLeft: pos }, 1000);
  }

  render() {
    let data = this.props.data;
    return (
      <div
        style={{ backgroundColor: "white", margin: "10px", width: "1530px" }}
      >
        <div className="width1400">
          <div className="margin-top">
            <div className="deals flex space-btw">
              <div style={{ marginRight: "70%" }}>
                <div style={{ margin: "10px" }}>
                  <h2>Selfie camera Phones</h2>
                  <p style={{ opacity: "0.6" }}>20MP or More Front Camera</p>
                </div>
              </div>
              <div className="viewAll" style={{ marginTop: "10px" }}>
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
              <div className="image-container-six section-one-img">
                <NinethSectionImg data={data} />
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

export default NinethSection;
