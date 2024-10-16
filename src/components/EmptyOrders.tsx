import React from "react";

const EmptyOrders = () => {
  return (
    <div className="empty-orders-container">
      <span>📦</span> <p>You currently have no orders.</p>
      <button className="btn-2">Explore Products</button>
    </div>
  );
};

export default EmptyOrders;
