import React from "react";
import { useUser } from "../contexte/UserContext";

const Navigation = () => {
  const { user } = useUser();
  return (
    <div>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Produit</li>
          <li>Profile</li>
          {user && <li>{user?.firstname}</li>}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
