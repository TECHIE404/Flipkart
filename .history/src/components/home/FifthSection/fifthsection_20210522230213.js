import React from "react";
import $ from "jquery";
import FifthSectionImg from "./fifthsectionimg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
          className="width1400"
          style={{
            backgroundColor: "white",
            padding: "10px",
            margin: "10px",
            display: "flex",
          }}
        >
          <div className="margin-top">
            <div
              className="deals flex space-btw"
              style={{ display: "flex", marginRight: "80%" }}
            >
              <div>
                <div>
                  <h2>Best of Electronics</h2>
                  <p>Devices and Accessories</p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(40,116,240)",
                  height: "50px",
                  width: "100px",
                  color: "white",
                  margin: "5px",
                  alignContent: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                <h4>VIEW ALL</h4>
              </div>
            </div>
            <div className="section-one" style={{ display: "flex" }}>
              <a
                className="prev-arrow prev"
                onClick={this.scrollThree.bind(null, -1)}
              >
                <svg
                  width="14.6"
                  height="27"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: "100px" }}
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="#000000"
                    class="_3Zc0XY"
                  ></path>
                </svg>
              </a>
              <div
                className="image-container-three section-one-img"
                style={{ margin: "10%" }}
              >
                <FifthSectionImg data={data} />
              </div>
              <a
                className="next-arrow next"
                onClick={this.scrollThree.bind(null, 1)}
              >
                <svg
                  width="14.6"
                  height="27"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  class="_2gp_O1"
                  style={{
                    marginTop: "100px",
                    fontWeight: "bolder",
                    height: "30px",
                  }}
                >
                  <ArrowForwardIosIcon fontSize="110" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FifthSection;
