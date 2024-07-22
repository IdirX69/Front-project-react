import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNavigation from "../../components/AdminNavigation";
import { CategoryType } from "../../types/types";

const EditProduct = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { id } = useParams<{ id: string }>();
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [upload, setUpload] = useState<File | null>(null);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    image: "",
  });

  const fetchCategories = useCallback(async () => {
    const response = await fetch(`${apiKey}/categories`);
    const data = await response.json();
    setCategories(data);
  }, []);

  const fetchOneProduct = useCallback(async () => {
    if (id) {
      const response = await fetch(`${apiKey}/products/${id}`);
      const data = await response.json();
      setProduct({
        name: data.name,
        description: data.description,
        price: data.price,
        categoryId: data.categoryId,
        image: data.image,
      });
    }
  }, [id]);

  useEffect(() => {
    fetchCategories();
    fetchOneProduct();
  }, [fetchCategories, fetchOneProduct]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = async () => {
    if (upload !== null) {
      const imageData = new FormData();
      imageData.append("image", upload);
      try {
        const imageResponse = await fetch(`${apiKey}/products/upload`, {
          method: "POST",
          body: imageData,
        });
        if (!imageResponse.ok) {
          throw new Error("Image upload failed");
        }
        const { filename } = await imageResponse.json();

        return filename;
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
    return product.image;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imageFilename = await handleImageUpload();
    try {
      const response = await fetch(`${apiKey}/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          price: String(product.price),
          image: imageFilename,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      fetchOneProduct();
      console.log("Product updated successfully: ");
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  return (
    <div className="admin-container">
      <AdminNavigation />
      <form onSubmit={handleSubmit}>
        <h2>Edit Product</h2>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label>Category</label>
        <select
          name="categoryId"
          value={product.categoryId}
          onChange={handleChange}
          multiple
        >
          <option value="">Select categories</option>
          {categories?.length > 0 &&
            categories?.map((category: CategoryType) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>

        <label>Description:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <img src={`${apiKey}/uploads/${product.image}`} alt={product.name} />

        <label className="btn-1 label-file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          New image
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => {
              if (e.target.files) {
                setUpload(e.target.files[0]);
              }
            }}
          />
        </label>

        <button className="btn-1">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
