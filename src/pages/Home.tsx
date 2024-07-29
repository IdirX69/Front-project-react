import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";

const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  });

  const fetchProducts = async () => {
    const response = await fetch(`${apiKey}/products`);
    const data = await response.json();
    setProducts(data);
  };
  return (
    <div>
      <Navigation />
      <Featured />
      <ProductList products={products} title="New products" />
    </div>
  );
};

export default Home;
