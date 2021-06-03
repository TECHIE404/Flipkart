import React from "react";
import $ from "jquery";
import EightSectionImg from "./eightsectionimg";

class EightSection extends React.Component {
  constructor() {
    super();
    this.scrollThree = this.scrollThree.bind(this);
  }

  scrollThree(direction) {
    let far = ($(".image-container-five").width() / 2) * direction;
    let pos = $(".image-container-five").scrollLeft() + far;
    $(".image-container-five").animate({ scrollLeft: pos }, 1000);
  }

  render() {
    let data = this.props.data;
    return (
      <div>
        <div className="width1400">
          <div className="margin-top">
            <div className="deals flex space-btw">
              <div>
                <div>
                  <h2>Top Offers On</h2>
                </div>
              </div>
              <div className="viewAll">
                <h4>VIEW ALL</h4>
              </div>
            </div>
            <div className="section-one">
              <a
                className="prev-arrow prev"
                onClick={this.scrollThree.bind(null, -1)}
              >
                <svg
                  width="14.6"
                  height="27"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="#000000"
                    class="_3Zc0XY"
                  ></path>
                </svg>
              </a>
              <div className="image-container-five section-one-img">
                <EightSectionImg data={data} />
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
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="#000000"
                    class="_3Zc0XY"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EightSection;
