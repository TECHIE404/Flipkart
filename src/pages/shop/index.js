import React from "react";
import Secondnav from "../../components/home/navBar/index";
import FooterHome from "../../components/footer/footer";
import Footer from "../../components/footer/index";
import ShoppingSec from "../../components/shopping/Cloths"; //"./shopping/Cloths";
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
