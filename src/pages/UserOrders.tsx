import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import AccountNavigation from "../components/AccountNavigation";
import OrdersList from "../components/OrdersList";

const UserOrders = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"; // Prevent body scrolling
    } else {
      document.body.style.overflow = "unset"; // Restore body scrolling
    }

    return () => {
      document.body.style.overflow = "unset"; // Clean up on unmount
    };
  }, [modal]);
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
