import React, { useState } from "react";
import AdminNavigation from "../../components/AdminNavigation";

const AddCategories = ({ fetchCategories }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const categoryData = {
        name: formData.name,
      };

      const categoryResponse = await fetch(`http://localhost:5000/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });

      if (!categoryResponse.ok) {
        console.log(categoryResponse);
        throw new Error("category creation failed");
      }

      const result = await categoryResponse.json();
      fetchCategories();

      if (!result.error) {
        console.log(`category ajouté: ${JSON.stringify(result)}`);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(`Erreur : ${error.message}`);
      alert(`Erreur : ${error.message}`);
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
