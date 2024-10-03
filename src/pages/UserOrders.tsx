import React, { useState } from "react";
import Navigation from "../components/Navigation";
import AccountNavigation from "../components/AccountNavigation";
import OrdersList from "../components/OrdersList";

const UserOrders = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Navigation />
      <div
        className={
          modal ? "user-order-container no-scroll" : "user-order-container"
        }
      >
        <AccountNavigation />
        <OrdersList setModal={setModal} modal={modal} />
      </div>
    </>
  );
};

export default UserOrders;
