import React, { useState } from "react";
import { useUser } from "../contexte/UserContext";
import { Link } from "react-router-dom";

const OrderInfo = () => {
  const { user } = useUser();

  return (
    <div className="order-info-container">
      {user ? (
        <>
          <h3>Order information</h3>
          <form>
            <span>{user?.firstname}</span>
            <span>{user?.lastname}</span>
            <span>{user?.email}</span>
            <span>{user?.address}</span>
            <span>{user?.zipcode + " " + user?.city}</span>
          </form>
        </>
      ) : (
        <>
          <p>Connect or register to see your order information</p>

          <Link to="/login">
            <button className="btn-4">Login or Register</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default OrderInfo;
