import React from "react";
import { useUser } from "../contexte/UserContext";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { user } = useUser();
  return (
    <nav className="navigation">
      <h1>Ecommerce</h1>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>All products</Link>
        <Link to={"/"}>Categories</Link>
        <Link to={"/"}>Account</Link>
        <Link to={"/"}>Cart</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
