import React, { useState } from "react";
import { authenticateUser } from "../services/session.service";
import { useUser } from "../contexte/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { setUser } = useUser();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${apiKey}/auth/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json" },
    });

    const { access_token } = await response.json();

    const authenticatedUser = await authenticateUser({
      userToken: access_token,
    });
    if (access_token) {
      setUser(authenticatedUser);
      navigate("/");
      return authenticatedUser;
    } else {
      console.log(response);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Votre email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Mot de passe"
        />

        <button type="submit">Connect</button>
      </form>
    </div>
  );
};

export default LoginForm;
