import React from "react";
import { ProductType } from "../types/types";

const ProductCard = ({ product }: { product: ProductType }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(product?.category?.name);

  return (
    <div className="product-card-container">
      <img src={`${apiKey}/uploads/${product.image}`} alt="" />
      <div>
        <h3>{product.name}</h3>
        <span>{product.category.name}</span>
        <span>{product.price + "€"}</span>
      </div>
    </div>
  );
};

export default ProductCard;
