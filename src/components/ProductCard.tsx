import React from "react";
import { ProductType } from "../types/types";
import { useCart } from "../contexte/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: ProductType }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(product?.category?.name);

  const { addProduct } = useCart();

  const navigate = useNavigate();

  return (
    <div
      className="product-card-container"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="img-container">
        <img src={`${apiKey}/uploads/${product.image}`} alt="" />
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
