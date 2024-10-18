import React, { useEffect, useState } from "react";
import { ProductType } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexte/CartContext";

const Featured = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [product, setProduct] = useState<ProductType | null>(null);
  const { addProduct } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`${apiKey}/products/${5}`);
    const data = await response.json();
    setProduct(data);
  };
  return (
    <div className="featured-container">
      <div className="featured">
        <div className="text-div">
          <h2>{product?.name}</h2>
          <p>{product?.description}</p>
          <div className="btn-div">
            <button className="btn-1" onClick={() => navigate(`/products/all`)}>
              All Products
            </button>
            {product && (
              <button className="btn-2" onClick={() => addProduct(product.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Add to cart
              </button>
            )}
          </div>
        </div>
        <div className="img-featured">
          {product && <img src={`${apiKey}/uploads/${product.image}`} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Featured;
