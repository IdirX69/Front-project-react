import React, { useState } from "react";
import { authenticateUser } from "../services/session.service";

import { useUser } from "../contexte/UserContext";

const Register: React.FC = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zipcode: "",
  });

  const { setUser } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiKey}/auth/register`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const { access_token, error, message } = await response.json();

      if (error) {
        console.error("Registration Error: ", message);
        return { error, message };
      }

      if (access_token) {
        // Utiliser le token d'accès pour authentifier l'utilisateur
        const authenticatedUser = await authenticateUser({
          userToken: access_token,
        });

        if (authenticatedUser) {
          setUser(authenticatedUser);
          // Redirection ou autres actions après enregistrement réussi
        }
      } else {
        console.error("Unexpected error: No access token received.");
        return {
          error: true,
          message: "Une erreur inattendue est survenue !",
        };
      }
    } catch (error) {
      console.error("Fetch Error: ", error);
      return {
        error: true,
        message: "Une erreur inattendue est survenue !",
      };
    }
  };

  return (
    <div className="login-form">
      <h3>Create your account</h3>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Your password"
        />
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
          placeholder="Firstname"
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          placeholder="Lastname"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Address"
        />
        <input
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          required
          placeholder="Zipcode"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          placeholder="City"
        />
        <button type="submit">Create account</button>
      </form>
    </div>
  );
};

export default Register;
