import React from "react";

const OrderInfo = () => {
  return (
    <div className="order-info-container">
      <h3>Order information</h3>
      <form>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <input type="number" placeholder="Postal code" />
        <input type="country" placeholder="Country" />
      </form>
      <button>Continue to payement</button>
    </div>
  );
};

export default OrderInfo;
