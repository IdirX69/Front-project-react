import React from "react";
import { NavLink } from "react-router-dom";

const EmptyOrders = () => {
  return (
    <div className="empty-orders-container">
      <span>📦</span> <p>You currently have no orders.</p>
      <NavLink to="/products/all" className="link-admin">
        <button className="btn-2">Explore Products</button>
      </NavLink>
    </div>
  );
};

export default EmptyOrders;
