import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Card from "./card";
export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div
      style={{
        padding: `0 ${chevronWidth}px`,
        maxWidth: "160%",
        marginLeft: "80px",
      }}
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={
          <button
            style={{
              color: "#272727",
              fontSize: "30px",
              height: "70px",
              width: "30px",
              background: "white",
            }}
          >
            {">"}
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 250, background: "#EEE" }}>
          <Card />
        </div>
        <div style={{ height: 250, background: "#EEE" }}>
          <Card />
        </div>
        <div style={{ height: 250, background: "#EEE" }}>
          <Card />
        </div>
        <div style={{ height: 250, background: "#EEE" }}>
          <Card />
        </div>
      </ItemsCarousel>
    </div>
  );
};
