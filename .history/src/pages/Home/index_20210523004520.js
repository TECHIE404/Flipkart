import React from "react";
import Footer from "../../components/footer/index";
import Product from "../../components/products";
import "./index.css";
import secondNavBar from "../../components/test/";
import BannerSec from "../../components/home/banner/index";
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
