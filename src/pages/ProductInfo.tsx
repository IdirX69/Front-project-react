import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ProductType } from "../types/types";

const ProductInfo = ({ id, setModal }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [product, setProduct] = useState<ProductType>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`${apiKey}/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  return (
    <>
      <div className="product-info-container">
        <span onClick={() => setModal(false)}>X</span>
        <div className="img-container">
          <p>{product.name}</p>
          <img src={`${apiKey}/uploads/${product.image}`} alt="" />
        </div>
        <div className="product-info">
          <p>{product.price}€</p>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
