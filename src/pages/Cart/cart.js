import React from "react";
import "../Cart/cart.css";
import { Link } from "react-router-dom";
function Cart() {
  return (
    <div className="cart-1">
      <div className="cart-2">
        <p className="cart-3">Your Shopping Cart is Empty</p>
        <p className="cart-4">
          Explore our product page to add item(s) to your cart
        </p>
      </div>
      <button className="cart-5">Explore Products</button>
    </div>
  );
}

export default Cart;
