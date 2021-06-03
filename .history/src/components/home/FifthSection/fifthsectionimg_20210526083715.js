import React, { useState } from "react";
import "./fifthsectionimg.css";
import ItemsCarousel from "react-items-carousel";
function FifthSectionImg(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
  // console.log(props)
  return (
    <div
      style={{
        padding: `0 ${chevronWidth}px`,

        width: "1400px",
      }}
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ display: "flex" }}>
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
        </div>
        <div style={{ display: "flex" }}>
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
        </div>
        <div style={{ display: "flex" }}>
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
        </div>
        <div style={{ display: "flex" }}>
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
        </div>
      </ItemsCarousel>
    </div>
  );
}

export default FifthSectionImg;

// <div>
//       <div style={{ display: "flex" }}>
//         {props.data.map((data) => {
//           // console.log(data)
//           if (data.category === "Best of Electronics") {
//             let urlImg = "http://206.189.124.254:9000" + data.image;
//             // console.log(data)
//             return (
//               <div
//                 className="section-one-content"
//                 key={data._id}
//                 style={{ margin: "10px" }}
//               >
//                 <img
//                   src={urlImg}
//                   alt="img1"
//                   height="150px"
//                   style={{ alignItems: "center" }}
//                 />
//                 <ul class="section-one-img-links">
//                   <li className="productName">{data.name}</li>
//                   <li className="proudctPrice">
//                     From &#8377; {data.price} +Extra50%Off
//                   </li>
//                   <li className="productDesc">{data.description}</li>
//                 </ul>
//               </div>

//             );
//           }
//         })}

//       </div>
//     </div>
