import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNavigation from "../../components/AdminNavigation";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const fetchOneProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/articles/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const data = await response.json();
      setProduct({
        name: data.name,
        description: data.description,
        price: String(data.price),
        image: data.image,
      });
    } catch (error) {
      console.error("Error fetching product: ", error);
    }
  };

  useEffect(() => {
    fetchOneProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/articles/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          price: String(product.price),
        }),
      });
      if (!response.ok) {
        console.log(response);
      }
      const data = await response.json();
      console.log("Product updated successfully: ", data);
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
        <img
          src={"http://localhost:5000/uploads/" + product.image}
          alt={product.name}
        />
        <input
          type="text"
          name="image"
          id="image"
          value={product.image}
          onChange={handleChange}
        />

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
          <input type="file" id="file" name="file" />
        </label>

        <button className="btn-1">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
