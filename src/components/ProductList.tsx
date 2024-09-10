import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "../types/types";

const ProductList = ({
  products,
  title,
}: {
  products: ProductType[];
  title: string;
}) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const fetchCategories = async () => {
    const response = await fetch(`${apiKey}/categories`);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category.name === selectedCategory
        );

  return (
    <div className="products-list-container">
      <h2>{title}</h2>

      <div className="category-filter">
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="products-list">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
