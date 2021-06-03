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
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ClearIcon from "@material-ui/icons/Clear";
import LoginDialog from "./dialogLogin";
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
    };
  }

  close = () => {
    this.setState({ open: false });
  };
  open = () => {
    this.setState({ open: true });
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
            <div style={{ display: "flex" }}>
              <div
                style={{
                  height: "600px",
                  weight: "350px",
                  maxWidth: "400px",
                  backgroundColor: "#2874f0",
                }}
              >
                <div style={{ marginTop: "20%", marginLeft: "10%" }}>
                  <div className="loginFirstSection" style={{ color: "#fff" }}>
                    Login
                  </div>
                  <div
                    className="loginSecoundSection"
                    style={{
                      paddingRight: "15px",
                      marginTop: "20px",
                      color: "#bdbdbd",
                    }}
                  >
                    Get access to your Orders, Wishlist and Recommendations
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "500px",
                  width: "1000px",
                  maxWidth: "1000px",
                  backgroundColor: "#fff",
                }}
              >
                <LoginDialog />
              </div>
              <div style={{ backgroundColor: "transparent", color: "green" }}>
                <ClearIcon />
              </div>
            </div>
            {/* <DialogActions>
              <Button onclick={this.close}>Agree</Button>
            </DialogActions> */}
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
