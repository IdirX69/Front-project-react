import React, { useEffect, useState } from "react";

const OrdersList = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [orders, setOrders] = useState([]);

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
    </div>
  );
};

export default OrdersList;
