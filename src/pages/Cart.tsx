import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useCart } from "../contexte/CartContext";
import ProductList from "../components/ProductList";

const Cart = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { cart } = useCart();

  const fetchProducts = async () => {
    const response = await fetch(`${apiKey}/products`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredProducts = products?.filter((product) =>
      cart?.map((cartItem) => cartItem.id == product?.id)
    );
    setCartProducts(filteredProducts);
  }, [products, cart]);
  console.log(cartProducts);

  return (
    <div>
      <Navigation />
      <ProductList products={cartProducts} title="Cart" />
    </div>
  );
};

export default Cart;
