import React, { useState } from "react";
import { authenticateUser } from "../services/session.service";
import { useUser } from "../contexte/UserContext";

const LoginForm = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { setUser, logoutUser } = useUser();

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
    setUser(authenticatedUser);
    return authenticatedUser;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
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

      <button type="submit">Se Connecter</button>
      <button type="button" onClick={() => logoutUser()}>
        Se deconnecter
      </button>
    </form>
  );
};

export default LoginForm;
