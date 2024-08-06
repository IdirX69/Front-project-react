import React, { useState } from "react";
import { useUser } from "../contexte/UserContext";

const OrderInfo = () => {
  const { user } = useUser();

  return (
    <div className="order-info-container">
      <h3>Order information</h3>
      <form>
        <span>{user?.firstname}</span>
        <span>{user?.lastname}</span>
        <span>{user?.email}</span>
        <span>{user?.address}</span>
      </form>

      <button>Continue to payement</button>
    </div>
  );
};

export default OrderInfo;
