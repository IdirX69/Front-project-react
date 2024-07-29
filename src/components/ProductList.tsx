import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, title }) => {
  return (
    <div className="product-list-container">
      <h2>{title}</h2>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
