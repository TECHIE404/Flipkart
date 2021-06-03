import React from "react";
import "./nav.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoreTippy from "./moreTippy";
import LoginTippy from "./loginTippy";
import "tippy.js/themes/light.css";
class NavPage extends React.Component {
  constructor() {
    super();
    this.state = {
      date: [],
    };
  }
  render() {
    return (
      <div
        className="navbar-form navbar-fixed-top"
        style={{ position: "sticky", top: "0", zIndex: "999" }}
      >
        <header className="header">
          <div className="header_first">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart logo"
            />
            <div
              className="header_first1"
              alt="header_first1 unloaded"
              style={{ marginTop: "-4px" }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "white",
                  fontStyle: "italic",
                }}
              >
                Explore
              </span>{" "}
              <span
                style={{
                  fontSize: "11px",
                  fontStyle: "italic",
                  color: "#f9e107",
                }}
              >
                Plus
              </span>
              <span>
                <img
                  width="10px"
                  src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />{" "}
              </span>
            </div>
          </div>
          <div className="header_second">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <SearchIcon style={{ fontSize: "35px" }} />
          </div>
          <div className="header_third">
            <Tippy
              content={<LoginTippy></LoginTippy>}
              interactive={true}
              theme="light"
              trigger="click"
            >
              <button>Login</button>
            </Tippy>
          </div>
          <div className="header_fourth">
            <Tippy
              content={<MoreTippy></MoreTippy>}
              interactive={true}
              trigger="click"
              theme="light"
            >
              <span>More</span>
            </Tippy>

            <ExpandMoreIcon />
          </div>
          <div className="header_fifth">
            <ShoppingCartIcon />
            <p>Cart</p>
          </div>
        </header>
      </div>
    );
  }
}

export default NavPage;
