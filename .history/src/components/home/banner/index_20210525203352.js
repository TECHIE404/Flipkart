import img1 from "../../../images/home/banner/banner1.jpg";
import img3 from "../../../images/home/banner/banner3.jpg";
import img4 from "../../../images/home/banner/banner4.jpg";
import img5 from "../../../images/home/banner/banner5.jpg";
import img6 from "../../../images/home/banner/banner6.jpg";

import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
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
              height: "104px",
              background: "white",
              border: "none",
              width: "47px",
              fontWeight: "bolder",
              fontSize: "30px",
              marginLeft: "38px",
            }}
          >
            {"<"}
          </button>
        }
        rightChevron={
          <button
            style={{
              marginRight: "38px",
              height: "104px",
              background: "white",
              border: "none",
              width: "47px",
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
