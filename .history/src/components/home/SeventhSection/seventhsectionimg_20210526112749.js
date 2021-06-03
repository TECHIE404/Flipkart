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
        height: "auto",
      }}
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={20}
        leftChevron={<button className="leftArrow">{"<"}</button>}
        rightChevron={<button className="rightArrow">{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </ItemsCarousel>
    </div>
  );
}

export default SeventhSectionImg;
