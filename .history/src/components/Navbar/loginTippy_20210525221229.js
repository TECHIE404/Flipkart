import React from "react";
import MoreTippyComp from "./iconNameTippyComp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import TocIcon from "@material-ui/icons/Toc";
import "./loginTippy.css";
function LoginTippy() {
  return (
    <div className="logint">
      <div className="comp_one">
        <span className="spanone">New customer?</span>
        <span className="spantwo">Sign Up</span>
      </div>
      <hr className="hrline" />
      <MoreTippyComp
        name="My Profile"
        icon={<AccountCircleIcon style={{ height: "15px" }} />}
      />
      <hr className="hrline" />
      <div className="comp_two">
        <img
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
          alt="unable to load"
          height="15px"
        />
        <span style={{ marginLeft: "10px" }}>Flipkart Plus Zone</span>
      </div>
      <hr className="hrline" />
      <MoreTippyComp
        name="Orders"
        icon={<TocIcon style={{ height: "15px" }} />}
        className="comp_three"
      />
      <hr className="hrline" />
      <MoreTippyComp
        name="Whishlist"
        icon={<FavoriteIcon style={{ height: "15px" }} />}
      />
      <hr className="hrline" />
      <MoreTippyComp
        name="Rewards"
        icon={<ConfirmationNumberIcon style={{ height: "15px" }} />}
      />
      <hr className="hrline" />
      <MoreTippyComp
        name="Gift Cards"
        icon={<CardGiftcardIcon style={{ height: "15px" }} />}
      />
    </div>
  );
}

export default LoginTippy;
