import Navigation from "../components/Navigation";
import { useUser } from "../contexte/UserContext";
import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import OrdersList from "../components/OrdersList";
import UserInfos from "../components/UserInfos";
import LoginRegister from "./LoginRegister";

const Account = () => {
  const { user } = useUser();
  const [information, setInformation] = useState(false);
  const [orders, setOrders] = useState(false);
  if (!user) {
    return <LoginRegister />;
  }

  const handleClick = () => {
    setInformation(!information);
    setOrders(!orders);
  };
  return (
    <>
      <Navigation />
      <div className="account-page-container">
        <nav>
          <button onClick={handleClick}>Information</button>
          <button onClick={handleClick}>Orders</button>
        </nav>
        {!information && <UserInfos />}
        {orders && <OrdersList />}
      </div>
    </>
  );
};

export default Account;
