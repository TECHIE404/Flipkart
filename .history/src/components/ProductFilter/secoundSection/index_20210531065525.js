import React from "react";
import Collapsible from "react-collapsible";
import "../style.css";
function secoundSection() {
  return (
    <div style={{ justifyContent: "left" }}>
      <div className="categoryTitle">Category</div>
      <Collapsible trigger="Clothing and Accessories" className="accordion">
        <div className="accordionItem">Winter Wear</div>
        <div className="accordionItem">Topwear</div>
        <div className="accordionItem">Bottomwear</div>
        <div className="accordionItem">Raincoats</div>
        <div className="accordionItem">Dresses and Gown</div>
        <div className="accordionItem">Clothing Accessories</div>
        <div className="accordionItem">Jumpsuits and Dungar</div>
        <div className="accordionItem">Kurtas, Ethnic Sets </div>
        <div className="accordionItem">Fabrics</div>
        <div className="accordionItem">Sleepwear</div>
        <div className="accordionItem">Innerwear and Swimwear</div>
        <div className="accordionItem">Tracksuits</div>
        <div className="accordionItem">Blazers, Waistcoats and suits</div>
      </Collapsible>
    </div>
  );
}

export default secoundSection;
