import React from "react";
import { useUser } from "../contexte/UserContext";
import { Link } from "react-router-dom";
import { useCart } from "../contexte/CartContext";
import LogBtn from "./LogBtn";

const Navigation = () => {
  const { user, logoutUser } = useUser();
  const { cart } = useCart();
  return (
    <div className="navigation-container">
      <nav className="navigation">
        <h1>Ecommerce</h1>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/products/all"}>All products</Link>
          {user && <Link to={"/account/infos"}>Account</Link>}
          <LogBtn />
          <Link to={"/cart"}>Cart({cart?.length})</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
