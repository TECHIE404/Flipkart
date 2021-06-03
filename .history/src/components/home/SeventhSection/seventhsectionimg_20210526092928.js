import React, { useState } from "react";
import "./seventhsection.css";
import ItemsCarousel from "react-items-carousel";
import ProductCard from "../../productItemCard/index";
function SeventhSectionImg(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  // console.log(props)
  return (
    <div
      style={{
        padding: `0 ${chevronWidth}px`,
        width: "1400px",
        height: "250px",
      }}
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          <ProductCard />
        </div>
      </ItemsCarousel>
    </div>
  );
}

export default SeventhSectionImg;
