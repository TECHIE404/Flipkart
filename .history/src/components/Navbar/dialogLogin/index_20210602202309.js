import React from "react";
import TextField from "@material-ui/core/TextField";
function index() {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="emailOrMobile">
        <TextField
          label="Enter Email/ Mobile number"
          style={{ width: "300px", marginLeft: "40px", marginRight: "30px" }}
        />
      </div>
      <div className="password">
        <TextField
          label="Enter Password"
          style={{
            width: "300px",
            marginLeft: "40px",
            marginRight: "30px",
            marginTop: "15px",
          }}
        />
      </div>
      <div className="termsOfuse">
        <div
          style={{
            display: "flex",
            fontSize: "12px",
            margin: "40px",
            color: "#878787",
          }}
        >
          By continuing, you agree to `Flipkat's`{" "}
          <span style={{ color: "red" }}>Terms of Use</span> and
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="login"></div>
      <div className="or"></div>
      <div className="requestOTP"></div>
      <div className="signUp"></div>
    </div>
  );
}

export default index;
