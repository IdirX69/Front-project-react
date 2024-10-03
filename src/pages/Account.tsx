import Navigation from "../components/Navigation";
import { useUser } from "../contexte/UserContext";
import React, { useEffect, useState } from "react";

import LoginRegister from "./LoginRegister";
import { NavLink } from "react-router-dom";
import AccountNavigation from "../components/AccountNavigation";
import UserInfos from "../components/UserInfos";

const Account = () => {
  const { user } = useUser();

  if (!user) {
    return <LoginRegister />;
  }

  return (
    <>
      <Navigation />
      <div className="account-page-container">
        <AccountNavigation />
        <UserInfos />
      </div>
    </>
  );
};

export default Account;
