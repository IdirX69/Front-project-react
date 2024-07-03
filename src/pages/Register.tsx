import { useState } from "react";
import { authenticateUser } from "../services/session.service";
import axios from "axios";

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
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
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
        await authenticateUser({ userToken: access_token });

        // Configurer axios pour utiliser le token d'accès
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;

        console.log("User registered successfully!");
        // Redirection ou autres actions après enregistrement réussi
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
          placeholder="Votre prénom"
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          placeholder="Votre nom"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Adresse"
        />
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Register;
