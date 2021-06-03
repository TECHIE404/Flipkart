import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
function index() {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="emailOrMobile">
        <TextField label="Enter Email/ Mobile number" className="Email" />
      </div>
      <div>
        <TextField
          className="password"
          label="Enter Password"
          InputProps={{
            endAdornment: <div className="passwordsub">Forget?</div>,
          }}
        />
      </div>
      <div>
        <div className="termsOfuse">
          By continuing, you agree to `Flipkat's` Terms of Use and Privacy
          Policy
        </div>
      </div>
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
