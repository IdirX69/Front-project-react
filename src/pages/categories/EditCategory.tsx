import React, { useState } from "react";
import { CategoryType } from "../../types/types";

const EditCategory = ({ category, setEdit }: { category: CategoryType }) => {
  const { id, name } = category;
  const [newName, setNewName] = useState(name);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`${apiKey}/categories/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    });
    if (response.ok) {
      setEdit(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Change Category</h2>
      <label>
        Category name
        <input
          type="text"
          name="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
          placeholder="Nom de l'category"
        />
        <button className="btn-1" type="submit">
          Save
        </button>
      </label>
    </form>
  );
};

export default EditCategory;
