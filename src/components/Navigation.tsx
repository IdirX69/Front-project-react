import React from "react";
import { useUser } from "../contexte/UserContext";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { user } = useUser();
  return (
    <nav className="navigation">
      <ul>
        <li>Accueil</li>
        <li>Produit</li>
        <li>Site Name</li>

        <Link to={user?.firstname ? "admin-dashboard" : "/profile"}>
          {user && <li>{user?.firstname + " " + user.lastname}</li>}
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
