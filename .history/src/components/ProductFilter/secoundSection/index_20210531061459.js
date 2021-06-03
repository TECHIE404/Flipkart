import React from "react";
import Collapsible from "react-collapsible";
import "../style.css";
function secoundSection() {
  return (
    <div style={{ justifyContent: "left" }}>
      <div className="categoryTitle">Category</div>
      <Collapsible
        trigger="Clothing and Accessories"
        style={{ alignContent: "left" }}
      >
        <div>Winter Wear</div>
        <div>Topwear</div>
        <div>Bottomwear</div>
        <div>Raincoats</div>
        <div>Dresses and Gown</div>
        <div>Clothing Accessories</div>
        <div>Jumpsuits and Dungar</div>
        <div>Kurtas, Ethnic Sets </div>
        <div>Fabrics</div>
        <div>Sleepwear</div>
        <div>Innerwear and Swimwear</div>
        <div>Tracksuits</div>
        <div>Blazers, Waistcoats and suits</div>
      </Collapsible>
    </div>
  );
}

export default secoundSection;
