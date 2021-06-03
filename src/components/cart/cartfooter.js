import React from "react";

function CartFooter() {
  return (
    <div className="cart_footer">
      <div className="flex space-around">
        <div className="cart_footer_links_one">
          <li>
            Policies: Returns Policy | Terms of use | Security | Privacy |
            Infringement
            <li>© 2007-2020 Flipkart.com</li>
          </li>
          <div className="cart_footer_links_two">
            <li>Need help? Visit the Help Center or Contact Us</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartFooter;
