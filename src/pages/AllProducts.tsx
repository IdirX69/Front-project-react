import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Navigation from "../components/Navigation";

const AllProducts = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`${apiKey}/products`);
    const data = await response.json();
    setProducts(data);
  };
  return (
    <div>
      <Navigation />
      <ProductList products={products} title="All products" />
    </div>
  );
};

export default AllProducts;
