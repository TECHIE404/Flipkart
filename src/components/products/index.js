import React from "react";
import { useState, useEffect } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";
import { Data } from "../../images/data/index";
import "./index.css";
function Product() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    alanBtn({
      key: "9dd8469058ece1cfd62343c4e30ae49b2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
        if (command === "firstCommand") {
          console.log("firstcommand by user");
          alert("firstcommand");
        } else if (command === "shoe") {
          console.log("User called for shoe");
          filter("shoe");
        } else if (command === "shirt") {
          console.log("User called for shirt");
          filter("shirt");
        }
      },
    });
    filter("");
  }, []);
  const filter = (names) => {
    const filtered = Data.filter(function (item) {
      if (item.name.includes(names)) {
        return true;
      } else return null;
    });
    console.log(filtered);
    setCategory(filtered);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className="Products">
      {category.map((item) => {
        return (
          <div>
            <img
              className="ProductCard"
              width="100"
              src={item.image}
              alt="images"
              style={{ objectFit: "contain" }}
            />
            <p className="ProductName">{item.name}</p>
            <p className="PriceFrom">From ₹{item.actualPrice}</p>
            <p className="PriceTo"> To ₹{item.offerPrice}</p>
            <span>Trending</span>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
