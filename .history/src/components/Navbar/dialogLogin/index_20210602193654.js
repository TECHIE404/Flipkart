import React from "react";
import { form } from "react-bootstrap";
function index() {
  return (
    <div>
      <div className="emailOrMobile"></div>
      <div className="password">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
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
