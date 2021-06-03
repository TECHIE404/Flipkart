import React from "react";
import MoreTippyComp from "./iconNameTippyComp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import TocIcon from "@material-ui/icons/Toc";
import "./LoginTippy.css";
function LoginTippy() {
  return (
    <div className="logint">
      <div className="comp_one">
        <span className="spanone">New customer?</span>
        <span className="spantwo">Sign Up</span>
      </div>
      <hr />
      <MoreTippyComp name="My Profile" icon={<AccountCircleIcon />} />
      <hr />
      <div className="comp_two">
        <img
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
          alt="unable to load"
        />
        <span>Flipkart Plus Zone</span>
      </div>
      <hr />
      <MoreTippyComp name="Orders" icon={<TocIcon />} className="comp_three" />
      <hr />
      <MoreTippyComp name="Whishlist" icon={<FavoriteIcon />} />
      <hr />
      <MoreTippyComp name="Rewards" icon={<ConfirmationNumberIcon />} />
      <hr />
      <MoreTippyComp name="Gift Cards" icon={<CardGiftcardIcon />} />
    </div>
  );
}

export default LoginTippy;
