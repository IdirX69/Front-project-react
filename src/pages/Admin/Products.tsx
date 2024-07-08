import React, { useEffect, useState } from "react";
import AdminNavigation from "../../components/AdminNavigation";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:5000/articles");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="admin-container">
      <AdminNavigation />
      <div className="dashboard">
        <h2>Products</h2>
        <Link to={"new"}>
          <button className="btn-1">Add new product</button>
        </Link>
        <div className="dashboard-list">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
