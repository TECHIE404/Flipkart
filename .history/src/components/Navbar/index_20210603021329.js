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
import LoginForm from "../loginForm/index";
import Dialog from "@material-ui/core/Dialog";
import ClearIcon from "@material-ui/icons/Clear";
import LoginDialog from "./dialogLogin";
import CreateNewAccount from "../createNewAccount";

class NavPage extends React.Component {
  constructor() {
    super();
    this.state = {
      date: [],
      showModel: false,
      form: "",
      loading: false,
      error: null,
      open: false,
      pageTitle: "",
      pageDesc: "",
      login: false,
      register: false,
    };
  }

  close = () => {
    this.setState({ open: false });
  };
  open = () => {
    this.setState({
      open: true,
      pageTitle: "Login",
      pageDesc: "Get access to your Orders, Wishlist and Recommendations",
      login: "true",
    });
  };
  toNewAccount = () => {
    this.setState({
      pageTitle: "Looks like you're new here!",
      pageDesc: "Sign up with your mobile number to get started",
      login: "false",
      register: "true",
    });
  };

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
              trigger="mouseenter"
            >
              <button type="button" onClick={this.open}>
                Login
              </button>
            </Tippy>
          </div>
          <Dialog open={this.state.open}>
            <div
              style={{
                display: "flex",
                backgroundColor: "transparent",
              }}
            >
              <div
                style={{
                  height: "600px",
                  weight: "100%",
                  maxWidth: "500px",
                  backgroundColor: "#2874f0",
                }}
              >
                <div style={{ marginTop: "20%", marginLeft: "10%" }}>
                  <div className="loginFirstSection" style={{ color: "#fff" }}>
                    {this.state.pageTitle}
                  </div>
                  <div
                    className="loginSecoundSection"
                    style={{
                      marginTop: "20px",
                      color: "#bdbdbd",
                    }}
                  >
                    {this.state.pageDesc}
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "600px",
                  width: "1000px",
                  maxWidth: "1000px",
                  backgroundColor: "#fff",
                }}
              >
                {this.state.login ? (<LoginDialog />):(<CreateNewAccount/>); }

                <div className="signUp" onClick={this.toNewAccount}>
                  New to Flipkart? Create an account
                </div>
              </div>
              <ClearIcon
                fontSize="large"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </Dialog>
          <div className="header_fourth">
            <Tippy
              content={<MoreTippy></MoreTippy>}
              interactive={true}
              trigger="mouseenter"
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
        <LoginForm showModel={this.state.showModel} onClose={this.close} />
      </div>
    );
  }
}

export default NavPage;
