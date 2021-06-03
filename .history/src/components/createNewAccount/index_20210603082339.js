import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
import firebase from "../../services/firebase";

class index extends React.Component {
  constructor() {
    super();
    this.state = {
      number: "",
    };
  }

  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca Varified");
        },
        defaultCountry: "IN",
      }
    );
  };
  onContinue = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.number;
    console.log("the phone number is");
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        Window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
      })
      .catch((error) => {
        console.log("SMS not sent");
      });
  };

  takenumber(ent) {
    this.setState({
      number: ent.target.value,
    });
  }
  render() {
    return (
      <div className="newAccount">
        <TextField
          className="number"
          label="Enter Mobile number"
          onchange={(ent) => this.takenumber(ent)}
        />
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
