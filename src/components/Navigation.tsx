import React, { useEffect, useState } from "react";
import { useUser } from "../contexte/UserContext";
import { Link } from "react-router-dom";
import { useCart } from "../contexte/CartContext";
import LogBtn from "./LogBtn";

const Navigation = () => {
  const { user } = useUser();
  const { cart } = useCart();
  const [cartCount, setCartCount] = useState(cart?.length || 0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cart?.length > cartCount) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 2000); // Animation dure 500ms
    }
    setCartCount(cart?.length);
  }, [cart]);

  return (
    <div className="navigation-container">
      <nav className="navigation">
        <h1>Ecommerce</h1>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/products/all"}>All products</Link>
          {user && <Link to={"/account/infos"}>Account</Link>}
          <LogBtn />
          <Link to={"/cart"}>Cart ({cart?.length})</Link>
        </ul>
        <span className={`cart-count ${animate ? "animate" : ""}`}>
          Product added !
        </span>
      </nav>
    </div>
  );
};

export default Navigation;
