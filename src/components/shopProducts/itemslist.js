import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import checkone from "../../images/product/checkone.png";
import Card from "./ItemCard";

function ProductCard(props) {
  let data = props.data;
  console.log(data);

  return (
    <div
      style={{
        display: "-webkit-flex",
        maxWidth: "1200px",
        maxHeight: "2000px",
        overflowY: "scroll",
      }}
    >
      {data.map((data) => {
        if (data.category === "Shop page") {
          console.log("count outer loop");
          let urlImg = "http://206.189.124.254:9000" + data.image;
          return (
            <div key={data._id} style={{ margin: "10px" }}>
              {console.log("count inner loop")}
              <Link to={`/product/${data._id}`}>
                <img
                  className="img"
                  src={urlImg}
                  alt="product_img_1"
                  width="200px"
                  height="300px"
                  margin="10px"
                />
              </Link>
              <div className="shop-img-details">
                <li
                  style={{
                    opacity: "0.5",
                    fontWeight: "bolder",
                    listStyle: "none",
                    marginTop: "10px",
                  }}
                >
                  {data.name}
                </li>
                <li
                  style={{
                    opacity: "0.7",
                    listStyle: "none",
                    marginTop: "10px",
                  }}
                >
                  {data.description}{" "}
                  <img
                    src={checkone}
                    width="50"
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  />
                </li>
                <li style={{ listStyle: "none" }}>
                  <b>₹ {data.price}</b>
                  <span
                    style={{
                      textDecoration: "line-through",
                      opacity: "0.6",
                      fontWeight: "bold",
                    }}
                  >
                    ₹1,999
                  </span>{" "}
                  <span style={{ color: "green" }}>75% off</span>
                </li>
                <li style={{ listStyle: "none", marginTop: "10px" }}>
                  <b style={{ opacity: "0.5" }}>Size</b> 39, 40, 42, 44
                </li>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProductCard;
