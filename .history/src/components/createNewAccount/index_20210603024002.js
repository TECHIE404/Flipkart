import React from "react";

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
