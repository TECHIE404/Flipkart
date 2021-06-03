import React from "react";
import "./eidghtsection.css";
function EightSectionImg(props) {
  // console.log(props)
  return (
    <div style={{ display: "flex" }}>
      {props.data.map((data) => {
        // console.log(data)
        if (data.category === "Top Offers On") {
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
                <img src={urlImg} alt="img1" />
              </div>
              <ul class="section-one-img-links">
                <li className="dataname">{data.name}</li>
                <li className="dataprice">
                  From &#8377; {data.price} +Extra50%Off
                </li>
                <li className="datadesc">{data.description}</li>
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}

export default EightSectionImg;
