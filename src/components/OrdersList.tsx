import React, { useEffect, useState } from "react";
import { OrderType } from "../types/types";
import moment from "moment";
import OrderDetail from "./OrderDetail";
import { useUser } from "../contexte/UserContext";

import EmptyOrders from "./EmptyOrders";

const OrdersList = ({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [orders, setOrders] = useState<OrderType[]>([]);
  const { user } = useUser();

  const [orderToDetail, setOrderToDetail] = useState<OrderType | null>(null);

  const fetchOrders = async () => {
    const response = await fetch(`${apiKey}/orders`);
    const data = await response.json();
    setOrders(data);
  };
  const userOrders = orders?.filter((order) => order.userId == user?.id);

  const handleClick = (order: OrderType) => {
    setOrderToDetail(order);
    setModal(true);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (userOrders.length == 0) return <EmptyOrders />;

  return (
    <>
      <div
        className={
          modal ? "order-list-container no-scroll" : "order-list-container"
        }
      >
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
            {userOrders?.map((order: OrderType) => (
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
        {modal && (
          <OrderDetail
            order={orderToDetail}
            setModal={setModal}
            modal={modal}
          />
        )}
      </div>
    </>
  );
};

export default OrdersList;
