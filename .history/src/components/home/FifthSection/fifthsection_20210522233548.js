import React from "react";
import $ from "jquery";
import FifthSectionImg from "./fifthsectionimg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import "./fifthsectionimg.css";
class FifthSection extends React.Component {
  constructor() {
    super();
    this.scrollThree = this.scrollThree.bind(this);
  }

  scrollThree(direction) {
    let far = ($(".image-container-three").width() / 2) * direction;
    let pos = $(".image-container-three").scrollLeft() + far;
    $(".image-container-three").animate({ scrollLeft: pos }, 1000);
  }

  render() {
    let data = this.props.data;
    return (
      <div>
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            margin: "10px",
            width: "100%",
            display: "flex",
          }}
        >
          <div className="margin-top">
            <div className="deals flex space-btw" style={{ display: "flex" }}>
              <div style={{ marginRight: "1000px" }}>
                <div>
                  <h2>Best of Electronics</h2>
                  <p>Devices and Accessories</p>
                </div>
              </div>
              <div className="viewAll">
                <h4>VIEW ALL</h4>
              </div>
            </div>
            <div className="section-one" style={{ display: "flex" }}>
              <a
                className="prev-arrow prev"
                onClick={this.scrollThree.bind(null, -1)}
              >
                <div
                  width="14.6"
                  height="27"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  class="_2gp_O1"
                  style={{
                    marginTop: "100px",
                    fontWeight: "bolder",
                  }}
                >
                  <KeyboardArrowLeftIcon fontSize="large" />
                </div>
              </a>
              <div
                className="image-container-three section-one-img"
                style={{ margin: "5%" }}
              >
                <FifthSectionImg data={data} />
              </div>
              <a
                className="next-arrow next"
                onClick={this.scrollThree.bind(null, 1)}
              >
                <div
                  width="20"
                  height="27"
                  viewBox="0 0 16 27"
                  class="_2gp_O1"
                  style={{
                    marginTop: "100px",
                    height: "40px",
                    fontWeight: "bolder",
                    backgroundColor: "blue",
                  }}
                >
                  <ArrowForwardIosIcon fontSize="large" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FifthSection;
