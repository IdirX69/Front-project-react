import React, { useEffect, useState } from "react";
import { CategoryType } from "../types/types";
import Navigation from "../components/Navigation";

const AllCategories = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const fetchCategories = async () => {
    const response = await fetch(`${apiKey}/categories`);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="all-categories-container">
      <Navigation />
      <h2 className="categories-title">Choose your category</h2>
      <div className="categories-list">
        {categories.map((category) => (
          <span key={category.name} className="category-item">
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
