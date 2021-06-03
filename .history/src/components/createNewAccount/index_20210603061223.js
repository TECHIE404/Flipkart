import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
import fire

class index extends Component {
  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );
  };
  state = {};
  render() {
    return (
      <div className="newAccount">
        <TextField className="number" label="Enter Mobile number" />
        <p className="termsOfUse">
          By continuing, you agree to Flipkart's <span>Terms of Use</span> and
          <span> Privacy Policy</span>
        </p>
        <input value="continue" className="continue" />
        <input value="Existing User? Log in" className="againLogin" />
      </div>
    );
  }
}

export default index;
