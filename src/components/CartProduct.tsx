import React from "react";
import { useCart } from "../contexte/CartContext";
import { ProductType } from "../types/types";
import { useUser } from "../contexte/UserContext";

const CartProduct = ({ products }: { products: ProductType[] }) => {
  const { cart, clearCart, addProduct, removeProduct } = useCart();
  const { user } = useUser();

  const moreProduct = (productId: number) => {
    addProduct(productId);
  };

  const lessProduct = (productId: string) => {
    removeProduct(productId);
  };

  const getProductQuantity = (productId: number) => {
    return cart?.filter((item) => parseInt(item) === productId).length;
  };

  const total = products.reduce((acc, element) => {
    return acc + (getProductQuantity(element.id) || 0) * element.price;
  }, 0);

  const handleOrder = async () => {
    if (products.length > 0) {
      const orderItems = products
        .map((product) => ({
          productId: product.id,
          quantity: getProductQuantity(product.id),
        }))
        .filter((item) => item.quantity > 0);

      const orderData = {
        userId: user?.id,
        items: orderItems,
      };

      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        clearCart();
      } else {
        console.error("Failed to place order");
      }
    }
  };

  return (
    <div className="cart-product-container">
      <table className="cart-table">
        <thead>
          <h3>Cart</h3>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>
                <div className="product-container">
                  <div className="img-container">
                    <img
                      src={`http://localhost:5000/uploads/${prod.image}`}
                      alt={prod.name}
                    />
                  </div>
                  {prod.name}
                </div>
              </td>
              <td>
                <button onClick={() => lessProduct(prod.id)}>-</button>
                {getProductQuantity(prod.id)}
                <button onClick={() => moreProduct(prod.id)}>+</button>
              </td>
              <td>{prod.price * (getProductQuantity(prod.id) ?? 0)}€</td>
            </tr>
          ))}
          <tr>
            <th></th>
            <th></th>
            <th>Total : {total}€</th>
          </tr>
        </tbody>
        {user && (
          <button className="btn-4" onClick={handleOrder}>
            Confirm buy
          </button>
        )}
      </table>
    </div>
  );
};

export default CartProduct;
