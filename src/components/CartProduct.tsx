import React from "react";
import { useCart } from "../contexte/CartContext";
import { ProductType } from "../types/types";

const CartProduct = ({ products }: { products: ProductType[] }) => {
  const { cart } = useCart();

  const getProductQuantity = (productId: number) => {
    return cart?.filter((item) => item === productId).length;
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

              <td>{getProductQuantity(prod.id)}</td>
              <td>{prod.price}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProduct;
