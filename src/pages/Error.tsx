import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Something was wrong</h2>
      <Link to={"/"}>Return to home page</Link>
    </div>
  );
};

export default Error;
