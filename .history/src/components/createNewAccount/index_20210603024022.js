import React from "react";
import TextField from "@material-ui/core/TextField";
function index() {
  return (
    <div>
      <TextField
        className="password"
        label="Enter Password"
        InputProps={{
          endAdornment: <div className="passwordsub">Forget?</div>,
        }}
      />
    </div>
  );
}

export default index;
