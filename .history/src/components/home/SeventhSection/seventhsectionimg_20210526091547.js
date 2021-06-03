import React, { useState } from "react";
import "./seventhsection.css";
import ItemsCarousel from "react-items-carousel";
function SeventhSectionImg(props) {
  // console.log(props)
  return (
    <div className="imageCardlist">
      {props.data.map((data) => {
        // console.log(data)
        if (data.category === "Your Fave Fashion Brands") {
          let urlImg = "http://206.189.124.254:9000" + data.image;
          // console.log(data)
          return (
            <div className="section-one-content" key={data._id}>
              <div
                style={{
                  height: "150px",
                  width: "150px",
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                {" "}
                <img src={urlImg} alt="img1" />
              </div>
              <ul class="section-one-img-links">
                <li className="dataName">{data.name}</li>
                <li className="dataPrice">
                  From &#8377; {data.price} +Extra50%Off
                </li>
                <li className="dataDesc">{data.description}</li>
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SeventhSectionImg;
