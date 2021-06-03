import React from "react";
import CartFooter from "./cartfooter";
import DataCart from "./fetchcart";
import SecondNav from "../../components/navbar/secondNavbar/secondnav";

function CartPage({ match }) {
  let id = match.params.id;
  return (
    <div>
      <SecondNav />
      <DataCart id={id} />
      <CartFooter />
    </div>
  );
}

export default CartPage;
/* File Formatting
      -camelCase- same format-small/camelcase
      -compoent and page should be in different file .
        pages-
    -api and config 
      */
