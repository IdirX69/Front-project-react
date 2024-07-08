import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="product-card-container">
      <img src={`http://localhost:5000/uploads/${product.image}`} alt="" />
      <div>
        <h3>{product.name}</h3>
        <span>{product.price + "€"}</span>
      </div>
    </div>
  );
};

export default ProductCard;
