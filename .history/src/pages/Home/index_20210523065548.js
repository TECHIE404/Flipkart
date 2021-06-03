import React from "react";
import Footer from "../../components/footer/index";

import "./index.css";
import secondNavBar from "../../components/navbar/secondNavbar/secondnav";
import BannerSec from "../../components/home/banner/index";

import FooterHome from "../../components/footer/footer";
import DataHome from "../../components/data/fetchhome";

function index() {
  return (
    <div className="App">
      data
      <BannerSec />
      <DataHome />
      <FooterHome />
      <Footer />
    </div>
  );
}

export default index;
