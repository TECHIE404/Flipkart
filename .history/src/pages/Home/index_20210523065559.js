import React from "react";
import Footer from "../../components/footer/index";

import "./index.css";

import BannerSec from "../../components/home/banner/index";

import FooterHome from "../../components/footer/footer";
import DataHome from "../../components/data/fetchhome";

function index() {
  return (
    <div className="App">
      
      <BannerSec />
      <DataHome />
      <FooterHome />
      <Footer />
    </div>
  );
}

export default index;
