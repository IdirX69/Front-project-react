import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
