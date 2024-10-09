import React from "react";
import { useCart } from "../contexte/CartContext";

const AddToCartBtn = ({ id }: { id: number }) => {
  const { addProduct } = useCart();
  return (
    <button className="add-to-cart-btn" onClick={() => addProduct(id)}>
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
