import Navigation from "../components/Navigation";
import { useUser } from "../contexte/UserContext";
import React, { useEffect, useState } from "react";

import LoginRegister from "./LoginRegister";

const Account = () => {
  const { user } = useUser();

  if (!user) {
    return <LoginRegister />;
  }

  return (
    <>
      <Navigation />
      <div className="account-page-container">
        <nav>
          <button>Information</button>
          <button>Orders</button>
        </nav>
      </div>
    </>
  );
};

export default Account;
