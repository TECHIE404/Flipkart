import React from "react";

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
              <img src={urlImg} alt="img1" />
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

export default EightSectionImg;
