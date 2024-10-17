import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexte/UserContext";

const LogBtn = () => {
  const { user, logoutUser } = useUser();

  return (
    <div style={{ cursor: "pointer" }}>
      {user ? (
        <>
          <li onClick={logoutUser}>Logout</li>
        </>
      ) : (
        <Link to={"/account/infos"}>Login</Link>
      )}
    </div>
  );
};

export default LogBtn;
