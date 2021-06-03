import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
function index() {
  return (
    <div style={{ marginTop: "50px", marginLeft: "40px" }}>
      <TextField label="Enter Email/ Mobile number" className="Emaillogin" />

      <div>
        <TextField
          className="password"
          label="Enter Password"
          InputProps={{
            endAdornment: <div className="passwordsub">Forget?</div>,
          }}
        />
      </div>

      <p className="termsOfUse">
        By continuing, you agree to Flipkart's <span>Terms of Use</span> and
        <span> Privacy Policy</span>
      </p>
      <div>
        <input className="login" value="Login" />
      </div>
      <div className="or">OR</div>
      <div>
        <input className="requestOTP" value="Request OTP" />
      </div>
    </div>
  );
}

export default index;
