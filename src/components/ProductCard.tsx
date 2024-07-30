import React from "react";
import { ProductType } from "../types/types";

const ProductCard = ({ product }: { product: ProductType }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(product?.category?.name);

  return (
    <div className="product-card-container">
      <div className="img-container">
        <img src={`${apiKey}/uploads/${product.image}`} alt="" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div>
          <span>{product.price + "€"}</span>
          <button className="btn-2">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
