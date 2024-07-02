import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json" },
    });
    console.log(response);
  };

  return (
    <div>
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
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
          placeholder="votre prenom"
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          placeholder="votre nom"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="addresse"
        />
        <button type="submit">Crée un compte</button>
      </form>
    </div>
  );
};

export default Register;
