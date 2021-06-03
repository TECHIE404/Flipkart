import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
import firebase from "../../services/firebase";

class index extends React.Component {
  
  onContinue = (event) => {
   
  };
  render() {
    return (
      <div className="newAccount">
        <TextField className="number" label="Enter Mobile number" />
        <p className="termsOfUse">
          By continuing, you agree to Flipkart's <span>Terms of Use</span> and
          <span> Privacy Policy</span>
        </p>
        <input
          value="continue"
          className="continue"
          onClick={this.onContinue}
        />
        <input value="Existing User? Log in" className="againLogin" />
      </div>
    );
  }
}

export default index;
