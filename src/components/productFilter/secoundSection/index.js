import React from "react";
import Collapsible from "react-collapsible";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../style.css";
function title() {
  return (
    <div style={{ display: "flex ", margin: "20px" }}>
      <div>Clothing and Accessories</div>
      <ExpandMoreIcon />
    </div>
  );
}
function secoundSection() {
  return (
    <div
      style={{ justifyContent: "left", textAlign: "left", marginLeft: "10px" }}
    >
      <div className="categoryTitle">Category</div>
      <Collapsible trigger={title()} className="accordion">
        <div className="itemList">
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
        </div>
      </Collapsible>
    </div>
  );
}

export default secoundSection;
