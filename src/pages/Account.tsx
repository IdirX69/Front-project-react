import Navigation from "../components/Navigation";
import { useUser } from "../contexte/UserContext";
import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import OrdersList from "../components/OrdersList";

const Account = () => {
  const { user } = useUser();

  if (!user) {
    return <LoginForm />;
  }
  return (
    <>
      <Navigation />
      <div className="account-page-container">
        <nav>
          <span>Information</span>
          <span>Orders</span>
        </nav>

        <OrdersList />
      </div>
    </>
  );
};

export default Account;
