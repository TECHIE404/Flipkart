import React from "react";
import CartFooter from "../../components/cart/cartfooter";
import DataCart from "../../components/cart/fetchcart";
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
