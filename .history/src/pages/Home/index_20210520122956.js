import React from "react";
import Footer from "../../components/footer/index";
import Product from "../../components/Products";
import "./index.css";
import Secondnav from "../../components/navbar/secondNavbar/secondnav";
import BannerSec from "../../components/Test/image_slider";
import { SliderData } from "../../images/horizonalList/data";
import FooterHome from "../../components/footer/footer";
function index() {
  return (
    <div className="App">
      <Secondnav />
      <BannerSec slides={SliderData} />
      <Product />
      <FooterHome />
      <Footer />
    </div>
  );
}

export default index;
