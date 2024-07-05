import React from "react";
import { useUser } from "../contexte/UserContext";

const Navigation = () => {
  const { user } = useUser();
  return (
    <nav className="navigation">
      <ul>
        <li>Accueil</li>
        <li>Produit</li>
        <li>Site Name</li>
        <li>Profile</li>
        {user && <li>{user?.firstname + " " + user.lastname}</li>}
      </ul>
    </nav>
  );
};

export default Navigation;
