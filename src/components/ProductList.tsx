import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, title }) => {
  return (
    <div className="products-list-container">
      <h2>{title}</h2>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
