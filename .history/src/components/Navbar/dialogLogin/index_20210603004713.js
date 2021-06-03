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
            endAdornment: (
              <div
                style={{
                  color: "#2774f0",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
              >
                Forget?
              </div>
            ),
          }}
        />
      </div>
      <div >
        <div
        className="termsOfuse"
          style={{
            display: "flex",
            fontSize: "12px",
            marginLeft: "40px",
            marginTop: "40px",
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
            backgroundColor: "#fb641b",
            boxShadows: "0 1px 2px 0 rbg(0 0 0 /20% )",
            border: "none",
            color: "#ffff",
            fontSize: "15px",
            fontWeight: "bold",
            height: "48px",
            fontFamily: "sans-serif",
            width: "333.969px",
            marginTop: "10px",
            marginLeft: "40px",
          }}
        />
      </div>
      <div
        className="or"
        style={{
          fontSize: "22",
          color: "#878787",
          textAlign: "center",
          fontWeight: "500",
          marginTop: "20px",
        }}
      >
        OR
      </div>
      <div className="requestOTP">
        <input
          value="Request OTP"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
            border: "none",
            color: "#2774f0",
            fontSize: "15px",

            fontWeight: "bold",
            height: "48px",
            fontFamily: "sans-serif",
            width: "333.969px",
            marginLeft: "40px",
            marginTop: "20px",
          }}
        />
      </div>
      <div
        className="signUp"
        style={{
          color: "#2774f0",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "center",
          marginTop: "40%",
        }}
      >
        New to Flipkart? Create an account
      </div>
    </div>
  );
}

export default index;
