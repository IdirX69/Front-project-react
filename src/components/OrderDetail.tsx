import React from "react";
import { OrderType } from "../types/types";
import moment from "moment";

const OrderDetail = ({ order, setModal }: { order: OrderType }) => {
  return (
    <div className={"modal-overlay"}>
      <div className="order-detail-container">
        <div className="order-detail-header">
          <h2>Order Details</h2>
          <span onClick={() => setModal(false)}>X</span>
        </div>

        {/* Order Info */}
        <div className="order-info">
          <p>
            <strong>Order ID:</strong> #{order.id}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </p>
        </div>

        {/* User Info */}
        <div className="user-info">
          <h3>Customer Information</h3>
          <p>
            <strong>Name:</strong> {order.user.firstname}
          </p>
          <p>
            <strong>Email:</strong> {order.user.email}
          </p>
          <p>
            <strong>Address:</strong> {order.user.address}
          </p>
        </div>

        {/* Products Info */}
        <div className="products-info">
          <h3>Items in Order</h3>
          {order.items.map((item) => (
            <div className="product-card" key={item.product.id}>
              <div className="product-details">
                <p>
                  <strong>Product:</strong> {item.product.name}
                </p>
                <p>
                  <strong>Price:</strong> {item.product.price}€
                </p>
                <p>
                  <strong>Quantity:</strong> {item.quantity}
                </p>
                {item.quantity > 1 && (
                  <p>
                    <strong>Subtotal:</strong>{" "}
                    {item.quantity > 1 && item.product.price * item.quantity}€
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Order Total */}
        <div className="order-total">
          <h3>Total: {order.total}€</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
