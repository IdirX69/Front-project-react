import React, { useState } from "react";

const AddArticle = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
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
      // Step 1: Upload the image file
      const imageData = new FormData();
      imageData.append("image", formData.image);

      const imageResponse = await fetch(
        "http://localhost:5000/articles/upload",
        {
          method: "POST",
          body: imageData,
        }
      );

      if (!imageResponse.ok) {
        throw new Error("Image upload failed");
      }

      const imageResult = await imageResponse.json();

      // Step 2: Create the article with the uploaded image filename
      const articleData = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        image: imageResult.filename,
      };

      const articleResponse = await fetch("http://localhost:5000/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!articleResponse.ok) {
        throw new Error("Article creation failed");
      }

      const result = await articleResponse.json();

      if (!result.error) {
        console.log(`Article ajouté: ${JSON.stringify(result)}`);
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
