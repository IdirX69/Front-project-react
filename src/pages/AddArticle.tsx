import React, { useState } from "react";

const AddArticle = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
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

    const data = new FormData();

    data.append("image", formData.image);
    console.log(data.values);

    const response = await fetch("http://localhost:5000/articles/upload", {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    if (!result.error) {
      alert("Article ajouté avec succès !");
      console.log(`Erreur : ${JSON.stringify(result)}`);
    } else {
      alert(`Erreur : ${result.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Nom de l'article"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        placeholder="Description de l'article"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
        placeholder="Prix de l'article"
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
        required
        placeholder="Image de l'article"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddArticle;
