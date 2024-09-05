import React from "react";
import Navigation from "../components/Navigation";
import LoginForm from "./LoginForm";
import Register from "./Register";

const LoginRegister = () => {
  return (
    <>
      <Navigation />
      <div className="login-register-container">
        <LoginForm />
        <Register />
      </div>
    </>
  );
};

export default LoginRegister;
