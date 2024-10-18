import React from "react";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="cart-empty-container">
      <h2>Your cart is empty</h2>
      <NavLink to="/products/all" className="link-admin">
        <button className="btn-2">Explore Products</button>
      </NavLink>
    </div>
  );
};

export default EmptyCart;
