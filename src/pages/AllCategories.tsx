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

  console.log(categories);

  return (
    <div>
      <Navigation />
      <h2>Chose your catergory</h2>
      {categories.map((category) => (
        <span>{category.name}</span>
      ))}
    </div>
  );
};

export default AllCategories;
