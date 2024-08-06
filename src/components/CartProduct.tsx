import React from "react";
import { useCart } from "../contexte/CartContext";
import { ProductType } from "../types/types";

const CartProduct = ({ products }: { products: ProductType[] }) => {
  const { cart, addProduct, removeProduct } = useCart();

  const moreProduct = (productId: string) => {
    addProduct(productId);
  };
  const lessProduct = (productId: string) => {
    removeProduct(productId);
  };

  const getProductQuantity = (productId: number) => {
    return cart?.filter((item) => parseInt(item) === productId).length;
  };
  const total = products.reduce((acc, element) => {
    return acc + getProductQuantity(element.id) * element.price;
  }, 0);

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
              <td>{prod.price * getProductQuantity(prod.id)}€</td>
            </tr>
          ))}
          <tr>
            <th></th>
            <th></th>
            <th>Total : {total}€</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartProduct;
