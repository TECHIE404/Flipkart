import React from "react";
import "./iconNmaeTippyComp.css";
function MoreTippyComp({ name, icon }) {
  return (
    <div className="statement">
      <div className="icon">{icon}</div>
      <span>{name}</span>
    </div>
  );
}

export default MoreTippyComp;
