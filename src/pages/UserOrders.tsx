import React from "react";
import Navigation from "../components/Navigation";
import AccountNavigation from "../components/AccountNavigation";
import OrdersList from "../components/OrdersList";

const UserOrders = () => {
  return (
    <div>
      <Navigation />
      <AccountNavigation />
      <OrdersList />
    </div>
  );
};

export default UserOrders;
