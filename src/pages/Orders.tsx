import React, { useEffect, useState } from "react";
import AdminNavigation from "../components/AdminNavigation";
import { OrderType } from "../types/types";

const Orders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [orders, setOrders] = useState<OrderType[]>([]);

  const fetchOrders = async () => {
    const response = await fetch(`${apiKey}/orders`);
    const data = await response.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="admin-container">
      <AdminNavigation />
      <div className="dashboard">
        <h2>Orders</h2>

        <table className="products-table">
          <thead>
            <tr>
              <td>Order date</td>
              <td>User info</td>
              <td>Price</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((product: OrderType) => (
              <tr key={product.id}>
                <td>{product.createdAt}</td>
                <td>{product.user.email}</td>
                <td>{product.total}€</td>
                <td>{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
