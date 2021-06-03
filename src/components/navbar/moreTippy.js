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
        icon={<NotificationsIcon style={{ height: "18px" }} />}
      />
      <hr className="hrline" />
      <MoreTippyComp
        icon={<BusinessCenterIcon style={{ height: "18px" }} />}
        name="Sell on Flipkart"
      />
      <hr className="hrline" />
      <MoreTippyComp
        icon={<LiveHelpIcon style={{ height: "18px" }} />}
        name="24*7 Customer Care"
      />
      <hr className="hrline" />
      <MoreTippyComp
        icon={<TrendingUpIcon style={{ height: "18px" }} />}
        name="Advertise"
      />
      <hr className="hrline" />
      <MoreTippyComp
        icon={<GetAppIcon style={{ height: "18px" }} />}
        name="Download app"
      />
    </div>
  );
};

export default MoreTippy;
