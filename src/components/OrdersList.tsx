import React, { useEffect, useState } from "react";
import { OrderType, ProductType } from "../types/types";
import moment from "moment";

const OrdersList = () => {
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

  console.log(orders);

  return (
    <div>
      <h2>OrdersList</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Quatity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: OrderType) => (
            <tr key={order.id}>
              <td>{moment(order.createdAt).format("YYYY-MM-DD HH:mm")}</td>{" "}
              <td>{order.total}€</td>
              <td>{order.status}</td>
              <td>{order.items.length}</td>
              <button>Show more</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
