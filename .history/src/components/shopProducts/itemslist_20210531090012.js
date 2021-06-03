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
        width: "50%px",
        height: "3000px",
        display: "flex",
        overflowX: "auto",
        margin: "10px",
        backgroundColor: "pink",
      }}
      className="col-2"
    >
      {data.map((data) => {
        if (data.category === "Shop page") {
          let urlImg = "http://206.189.124.254:9000" + data.image;
          return (
            <div key={data._id} style={{ margin: "15px" }}>
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
                  }}
                >
                  {data.name}
                </li>
                <li style={{ opacity: "0.7", listStyle: "none" }}>
                  {data.description} <img src={checkone} width="50" />
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
                <li style={{ listStyle: "none" }}>
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
