import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
function index() {
  return (
    <div>
      <TextField className="Enter Mobile Number" label="Enter Password" />
      <p>
        By continuing, you agree to Flipkart's <span>Terms of Use</span> and
        <span> Privacy Policy</span>
      </p>
      <input value="continue" />
      <input value="Existing User? Log in" />
    </div>
  );
}

export default index;
