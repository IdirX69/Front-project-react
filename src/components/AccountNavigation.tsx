import React from "react";
import { NavLink } from "react-router-dom";

const AccountNavigation = () => {
  return (
    <nav className="account-navigation">
      <NavLink to={"/account"}>Information</NavLink>
      <NavLink to={"/account/orders"}>Orders</NavLink>
    </nav>
  );
};

export default AccountNavigation;
