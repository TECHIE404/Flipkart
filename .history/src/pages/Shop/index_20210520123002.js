import React from "react";
import Secondnav from "../../components/navbar/secondNavbar/secondnav";
import FooterHome from "../../components/footer/footer";
import Footer from "../../components/footer/index";
import ShoppingSec from "./shopping/Cloths";
function Shop() {
  return (
    <div>
      <Secondnav />
      <ShoppingSec />
      <FooterHome />
      <Footer />
    </div>
  );
}

export default Shop;
