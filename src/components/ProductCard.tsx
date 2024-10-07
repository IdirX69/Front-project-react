import React from "react";
import { ProductType } from "../types/types";
import { useCart } from "../contexte/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, handleClick }: { product: ProductType }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(product?.category?.name);

  const { addProduct } = useCart();

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
          <button onClick={() => addProduct(product.id)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
