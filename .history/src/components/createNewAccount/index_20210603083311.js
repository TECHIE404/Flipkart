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
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

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
  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.number;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        Window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent");
      });
  };
  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    console.log(code);
    Window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("User is verified");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  takenumber(evt) {
    this.setState({
      number: evt.target.value,
    });
  }
  render() {
    return (
      <div className="newAccount">
        <TextField
          className="number"
          label="Enter Mobile number"
          onChange={this.state.number}
        />
        <div style={{ margin: "20px" }}>
          <h2>Login Form</h2>
          <form onSubmit={this.onSignInSubmit}>
            <div id="sign-in-button"></div>
            <input
              type="number"
              onChange={(evt) => this.takenumber(evt)}
              name="mobile"
              placeholder="Mobile number"
              required
              onClick={this.handleChange}
            />
            <button>Submit</button>
          </form>
          <h2>Enter OTP</h2>
          <form onSubmit={this.onSubmitOTP}>
            <input
              type="number"
              name="Otp"
              placeholder="OTP number"
              onClick={this.handleChange}
              required
            />
            <button>Submit</button>
          </form>
        </div>

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
