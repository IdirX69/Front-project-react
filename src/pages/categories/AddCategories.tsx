import React, { useState } from "react";
import { getUserToken } from "../../services/session.service";

interface AddCategoriesProps {
  fetchCategories?: () => void;
}

const AddCategories: React.FC<AddCategoriesProps> = ({ fetchCategories }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const userToken = await getUserToken();

    e.preventDefault();

    try {
      const categoryData = {
        name: formData.name,
      };

      const categoryResponse = await fetch(`${apiKey}/categories`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(categoryData),
      });

      if (!categoryResponse.ok) {
        console.log(categoryResponse);
        throw new Error("category creation failed");
      }

      const result = await categoryResponse.json();
      if (fetchCategories) {
        fetchCategories();
      }

      if (!result.error) {
        console.log(`category ajouté: ${JSON.stringify(result)}`);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Erreur : ${error.message}`);
      } else {
        console.error("Unknown error", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Add new Category</h2>
      <label>
        Category name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Nom de l'category"
        />
        <button className="btn-1" type="submit">
          Ajouter
        </button>
      </label>
    </form>
  );
};

export default AddCategories;
