import React from "react";
import DataProduct from "../../components/products/fetchproduct"; //"./fetchproduct";
import Footer from "../../components/footer/index";
import SecondNav from "../../components/navbar/secondNavbar/secondnav";

function ProductPage({ match }) {
  // console.log(match)
  let id = match.params.id;
  return (
    <div style={{ backgroundColor: "white" }}>
      <SecondNav />
      <DataProduct id={id} />
      <Footer />
    </div>
  );
}

export default ProductPage;
