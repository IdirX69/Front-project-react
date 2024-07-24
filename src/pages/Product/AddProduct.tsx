import React, { useEffect, useState } from "react";
import AdminNavigation from "../../components/AdminNavigation";
import { CategoryType } from "../../types/types";

const AddArticle = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    categoryId: 0,
    image: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(`${apiKey}/categories`);
    const data = await response.json();
    setCategories(data);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement &
      HTMLTextAreaElement &
      HTMLSelectElement & { files: FileList | null };
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Step 1: Upload the image file
      const imageData = new FormData();
      imageData.append("image", formData.image);

      const imageResponse = await fetch(`${apiKey}/products/upload`, {
        method: "POST",
        body: imageData,
      });

      if (!imageResponse.ok) {
        console.log(imageResponse);

        throw new Error("Image upload failed");
      }

      const imageResult = await imageResponse.json();

      // Step 2: Create the article with the uploaded image filename
      const articleData = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        categoryId: formData.categoryId,
        image: imageResult.filename,
      };
      console.log(articleData);

      const articleResponse = await fetch(`${apiKey}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!articleResponse.ok) {
        const errorData = await articleResponse.json();
        console.log("Server response:", errorData);
        throw new Error(errorData.message || "Article creation failed");
      }

      const result = await articleResponse.json();

      if (!result.error) {
        console.log(`Article ajouté: ${JSON.stringify(result)}`);
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
    <div className="admin-container">
      <AdminNavigation />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Add new product</h2>
        <label>Product name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Nom de l'article"
        />
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Description de l'article"
        />

        <label>Category</label>
        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          multiple
        >
          <option value="">Select categories</option>
          {categories?.length > 0 &&
            categories.map((category: CategoryType) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          placeholder="Prix de l'article"
        />
        <label className="btn-1 label-file">
          Add image
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
            placeholder="Image de l'article"
          />
        </label>
        <button className="btn-1" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
