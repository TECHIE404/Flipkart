import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import GetAppIcon from "@material-ui/icons/GetApp";
import MoreTippyComp from "./iconNameTippyComp";
import "./moreTippy.css";
const MoreTippy = () => {
  return (
    <div className="moret">
      <MoreTippyComp
        name="Notifications Preference"
        icon={<NotificationsIcon />}
      />
      <hr className="hrline" />
      <MoreTippyComp
        icon={<BusinessCenterIcon fontSize="14" />}
        name="Sell on Flipkart"
      />
      <hr className="hrline" />
      <MoreTippyComp icon={<LiveHelpIcon />} name="24*7 Customer Care" />
      <hr className="hrline" />
      <MoreTippyComp icon={<TrendingUpIcon />} name="Advertise" />
      <hr className="hrline" />
      <MoreTippyComp icon={<GetAppIcon />} name="Download app" />
    </div>
  );
};

export default MoreTippy;
