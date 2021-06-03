// import React from "react";
import img1 from "../../../images/home/banner/banner1.jpg";
import img2 from "../../../images/home/banner/banner2.jpg";
import img3 from "../../../images/home/banner/banner3.jpg";
import img4 from "../../../images/home/banner/banner4.jpg";
import img5 from "../../../images/home/banner/banner5.jpg";
import img6 from "../../../images/home/banner/banner6.jpg";

// import "./index.css";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// class Banner extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       images: [img1, img2, img3, img4, img5, img6],
//       currentIndex: 0,
//       translateValue: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div className="slider">
//           <div className="LeftArrow">
//             <ArrowBackIosIcon style={{ marginTop: "40px" }} />
//           </div>
//           <div className="RightArrow">
//             <ArrowForwardIosIcon style={{ marginTop: "40px" }} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Banner;
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={
          <button
            style={{
              height: "70px",
              background: "white",
              border: "none",
              width: "30px",
              fontWeight: "bolder",
              fontSize: "30px",
            }}
          >
            {"<"}
          </button>
        }
        rightChevron={
          <button
            style={{
              height: "70px",
              background: "white",
              border: "none",
              width: "30px",
              fontWeight: "bolder",
              fontSize: "30px",
            }}
          >
            {">"}
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 300, background: "#EEE" }}>
          <img src={img1} />
        </div>

        <div style={{ height: 300, background: "#EEE" }}>
          <img src={img3} />
        </div>
        <div style={{ height: 300, background: "#EEE" }}>
          <img src={img4} />
        </div>
        <div style={{ height: 300, background: "#EEE" }}>
          <img src={img5} />
        </div>
        <div style={{ height: 300, background: "#EEE" }}>
          <img src={img6} />
        </div>
      </ItemsCarousel>
    </div>
  );
};
