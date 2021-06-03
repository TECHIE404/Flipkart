import React from "react";
import TextField from "@material-ui/core/TextField";
function index() {
  return (
    <div>
      <div className="emailOrMobile"></div>
      <div className="password">
        <TextField
          label="Enter Email/ Mobile number"
          style={{ width: "100%", marginLeft: "30px", marginRight: "30px" }}
        />
      </div>
      <div className="termsOfuse"></div>
      <div className="login"></div>
      <div className="or"></div>
      <div className="requestOTP"></div>
      <div className="signUp"></div>
    </div>
  );
}

export default index;
