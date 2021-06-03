import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import GetAppIcon from "@material-ui/icons/GetApp";
import MoreTippyComp from "./IconNameTippyComp";
const MoreTippy = () => {
  return (
    <div className="moret">
      <MoreTippyComp
        name="Notifications Preference"
        icon={<NotificationsIcon />}
      />
      <hr />
      <MoreTippyComp icon={<BusinessCenterIcon />} name="Sell on Flipkart" />
      <hr />
      <MoreTippyComp icon={<LiveHelpIcon />} name="24*7 Customer Care" />
      <hr />
      <MoreTippyComp icon={<TrendingUpIcon />} name="Advertise" />
      <hr />
      <MoreTippyComp icon={<GetAppIcon />} name="Download app" />
    </div>
  );
};

export default MoreTippy;
