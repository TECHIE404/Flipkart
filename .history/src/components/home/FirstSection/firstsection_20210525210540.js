import React from "react";
import $ from "jquery";
import FirstSectionImg from "./firstsectionimg";
import clock from "../../../images/additionlImages/home_page/clock.png";
import "./firstsection.css";
import Card from "./card";
import FirstSectionProductList from "./productList";
class FirstSection extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll(direction) {
    let far = ($(".image-container").width() / 2) * direction;
    let pos = $(".image-container").scrollLeft() + far;
    $(".image-container").animate({ scrollLeft: pos }, 1000);
  }

  render() {
    let data = this.props.data;
    return (
      <div>
        <div className="width1400" style={{ width: "100%", display: "flex" }}>
          <div
            className="row"
            style={{ width: "100%", backgroundColor: "white", margin: "10px" }}
          >
            <div
              className="col-10 margin-top"
              style={{ width: "100%", margin: "10px" }}
            >
              <div
                className="deals flex space-btw"
                style={{ display: "flex", margin: "10px" }}
              >
                <div style={{ marginRight: "45%" }}>
                  <h2>
                    Deals of the the Day{" "}
                    <img src={clock} alt="img" width="25" height="25" />{" "}
                    <span>00 : 44 : 25 Left</span>
                  </h2>
                </div>
                <div
                  style={{
                    backgroundAttachment: "scroll",
                    backgroundClip: "border-box",
                    backgroundColor: "rgb(40,116,240)",
                    backgroundImage: "none",
                    backgroundOrigin: "padding-box",
                    backgroundSize: "auto",
                    borderBottomColor: "white",
                    borderRadius: "2px",
                    boxShadow: "rgb(0,0,0,0.2) 0px 2px 4px 0px",
                    cursor: "pointer",
                    fontFamily: "Robot, Arial, sans-serif",
                    fontSize: "13px",
                    textAlign: "center",
                    width: "100px",
                    height: "50px",
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "right",
                    margin: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <h4>VIEW ALL</h4>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  marginLeft: "10px",
                  width: "900px",
                }}
              >
                <FirstSectionProductList />
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}{" "}
              </div>
            </div>
            <div
              className="col-2 margin-top"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                alignContent: "right",
              }}
            >
              {data.map((data) => {
                if (data.category === "Side image") {
                  let urlImg = "http://206.189.124.254:9000" + data.image;
                  return (
                    <img src={urlImg} alt="side_img" width="230" height="356" />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstSection;
