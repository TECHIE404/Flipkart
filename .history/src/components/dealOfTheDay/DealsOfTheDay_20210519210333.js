import { Button } from "bootstrap";
import React from "react";
import "./DealsOfTheDay.css";
import { ItemCard } from "../ItemCard";
export const DealsOfTheDay = () => {
  return (
    <div className="DealsOfTheDay">
      <div className="title">
        Deals of the Day
        <input type="button" value="View ALL" className="viewall" />
      </div>
      <hr style={{ color: "blue" }} />
      <div className="wrapper">
        <ItemCard imgsrc="https://rukminim1.flixcart.com/image/150/150/j9pyaa80/screwdriver-set/k/4/g/107-visko-original-imaezg75fat6dt3x.jpeg?q=70" />
        <ItemCard imgsrc="https://rukminim1.flixcart.com/image/150/150/j76i3rk0/smartwatch/r/y/2/dz09-mizco-original-imaexebe8mg5qnrf.jpeg?q=70" />
        <ItemCard imgsrc="https://rukminim1.flixcart.com/image/150/150/k2xmd8w0/pet-bed/3/x/d/xl-48-red-with-black-round-r-k-products-original-imafm6kethzvbhw5.jpeg?q=70" />
        <ItemCard imgsrc="https://rukminim1.flixcart.com/image/150/150/johi3680/edible-oil/g/u/j/1-aura-refined-flaxseed-glass-bottle-olive-oil-saffola-original-imafaxthyxk3wttd.jpeg?q=70" />
        <ItemCard imgsrc="https://rukminim1.flixcart.com/image/150/150/jmjhifk0/sanitary-pad-pantyliner/s/z/6/ultra-clean-plus-xl-44-sanitary-pad-whisper-original-imaf9ezuqgkpayhc.jpeg?q=70" />
        <ItemCard imgsrc="https://rukminim1.flixcart.com/image/150/150/k6mibgw0/dress/3/y/x/xl-sfdrss1791-sassafras-original-imafpyzftzgky33h.jpeg?q=70" />
        <ItemCard imgsrc="https://rukminim1.flixcart.com/image/150/150/jxkpx8w0/top/a/5/h/s-ss19ptshirt62-white-metronaut-original-imafgyy24tyauyqa.jpeg?q=70" />
        <ItemCard imgsrc="https://rukminim1.flixcart.com/flap/150/150/image/74bc985c62f19245.jpeg?q=70" />
      </div>
    </div>
  );
};
