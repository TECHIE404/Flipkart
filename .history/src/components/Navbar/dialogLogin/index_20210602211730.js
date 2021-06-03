import React from "react";
import TextField from "@material-ui/core/TextField";
import shadows from "@material-ui/core/styles/shadows";
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
          By continuing, you agree to `Flipkat's` Terms of Use and Privacy
          Policy
        </div>
      </div>
      <div className="login">
        <input
          value="Login"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor:#fb641b;
            boxShadows: "0 1px 2px 0 rbg(0 0 0 /20% )";
            border:none;
            color:#ffff
          }}

        />
      </div>
      <div className="or"></div>
      <div className="requestOTP"></div>
      <div className="signUp"></div>
    </div>
  );
}

export default index;
