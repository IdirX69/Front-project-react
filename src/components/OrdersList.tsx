import React, { useEffect, useState } from "react";
import { OrderType, ProductType } from "../types/types";
import moment from "moment";
import OrderDetail from "./OrderDetail";
import AccountNavigation from "./AccountNavigation";
import Navigation from "./Navigation";

const OrdersList = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [modal, setModal] = useState(false);
  const [orderToDetail, setOrderToDetail] = useState<OrderType>([]);

  const fetchOrders = async () => {
    const response = await fetch(`${apiKey}/orders`);
    const data = await response.json();
    setOrders(data);
  };

  const handleClick = (order: OrderType) => {
    setOrderToDetail(order);
    setModal(true);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <div>
        <h2>My orders</h2>
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
                <button onClick={() => handleClick(order)}>Show more</button>
              </tr>
            ))}
          </tbody>
        </table>
        {modal && <OrderDetail order={orderToDetail} setModal={setModal} />}
      </div>
    </>
  );
};

export default OrdersList;
