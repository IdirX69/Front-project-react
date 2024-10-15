import React, { useEffect, useState } from "react";
import { ProductType } from "../types/types";
import { useCart } from "../contexte/CartContext";
import AddToCartBtn from "../components/AddToCartBtn";

const ProductInfo = ({ id, setModal }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [product, setProduct] = useState<ProductType>([]);
  const { addProduct } = useCart();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`${apiKey}/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  return (
    <div className="modal-productinfo-bg">
      <div className="product-info-container">
        <span onClick={() => setModal(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className="product">
          <div className="img-container">
            <p>{product.name}</p>
            <img src={`${apiKey}/uploads/${product.image}`} alt="" />
          </div>
          <div className="product-info">
            <p>{product.price}€</p>
            <p>{product.description}</p>
            <div>
              <AddToCartBtn id={product.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
