import React from "react";
import Footer from "../../components/footer/index";
import Product from "../../components/products";
import "./index.css";
import secondNavBar from "../../components/navbar/secondNavbar/secondnav";
import BannerSec from "../../components/test/image_slider";
import { SliderData } from "../../images/horizonalList/data";
import FooterHome from "../../components/footer/footer";
import DataHome from "../../components/data/fetchhome";

function index() {
  return (
    <div className="App">
      <secondNavBar />
      <BannerSec />
      <DataHome />
      <Product />
      <FooterHome />
      <Footer />
    </div>
  );
}

export default index;
