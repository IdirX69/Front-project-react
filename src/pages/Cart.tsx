import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useCart } from "../contexte/CartContext";
import CartProduct from "../components/CartProduct";
import OrderInfo from "../components/OrderInfo";
import EmptyCart from "../components/EmptyCart";

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
      cart?.some((cartItem) => cartItem == product.id)
    );
    setCartProducts(filteredProducts);
  }, [products, cart]);

  return (
    <>
      <Navigation />
      {cartProducts.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="cart-container">
          <>
            <CartProduct
              products={cartProducts}
              setCartProducts={setCartProducts}
            />
            <OrderInfo />
          </>
        </div>
      )}
    </>
  );
};

export default Cart;
