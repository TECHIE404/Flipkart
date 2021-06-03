import React from "react";
import Collapsible from "react-collapsible";
import "../style.css";
function secoundSection() {
  return (
    <div style={{ justifyContent: "left" }}>
      <div className="categoryTitle">Category</div>
      <Collapsible trigger="Start here">
        <div>Winter Wear</div>
        <div>Topwear</div>
        <div>Bottomwear</div>
        <div>Raincoats</div>
      </Collapsible>
    </div>
  );
}

export default secoundSection;
