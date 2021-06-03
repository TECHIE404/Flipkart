import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
import firebase from "../../services/firebase";

class index extends Component {
  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onContinue();
        },
      }
    );
  };
  onContinue = (event) => {
    event.preventDefault();
    //const phoneNumber = getPhoneNumberFromUserInput();
    const phoneNumber = "+919760152716";
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        const code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
            console.log("user is signed in");
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
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
