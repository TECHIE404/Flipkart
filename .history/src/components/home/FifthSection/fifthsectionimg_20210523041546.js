import React from "react";
import "./fifthsectionimg.css";
function FifthSectionImg(props) {
  // console.log(props)
  return (
    <div className="list">
      <div class="item">
        {props.data.map((data) => {
          // console.log(data)
          if (data.category === "Best of Electronics") {
            let urlImg = "http://206.189.124.254:9000" + data.image;
            // console.log(data)
            return (
              <div
                className="section-one-content"
                key={data._id}
                style={{ margin: "10px" }}
              >
                <img
                  src={urlImg}
                  alt="img1"
                  height="150px"
                  style={{ alignItems: "center" }}
                />
                <ul class="section-one-img-links">
                  <li className="productName">{data.name}</li>
                  <li className="proudctPrice">
                    From &#8377; {data.price} +Extra50%Off
                  </li>
                  <li className="productDesc">{data.description}</li>
                </ul>
              </div>
            );
          }
        })}
        {props.data.map((data) => {
          // console.log(data)
          if (data.category === "Best of Electronics") {
            let urlImg = "http://206.189.124.254:9000" + data.image;
            // console.log(data)
            return (
              <div className="section-one-content" key={data._id}>
                <img
                  src={urlImg}
                  alt="img1"
                  height="150px"
                  style={{ alignItems: "center" }}
                />
                <ul class="section-one-img-links">
                  <li className="productName">{data.name}</li>
                  <li className="proudctPrice">
                    From &#8377; {data.price} +Extra50%Off
                  </li>
                  <li className="productDesc">{data.description}</li>
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FifthSectionImg;
