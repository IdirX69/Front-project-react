import React from "react";
import { ProductType } from "../types/types";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({
  product,
  handleClick,
}: {
  product: ProductType;
  handleClick: (id: number) => void;
}) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div className="product-card-container">
      <div className="img-container">
        <img
          src={`${apiKey}/uploads/${product.image}`}
          alt=""
          onClick={() => handleClick(product.id)}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div>
          <span>{product.price + "€"}</span>
          <AddToCartBtn id={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
