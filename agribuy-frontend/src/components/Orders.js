import React, { useEffect, useState } from "react";
import api from "../api/ApiService";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    api.get("/api/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div>

      <h2>Orders ({orders.length})</h2>

      {orders.map((order) => (
        <div key={order.orderId}>

          <h3>Order #{order.orderId}</h3>

          <p>Product ID: {order.productId}</p>

          <p>Buyer ID: {order.buyerId}</p>

          <p>Quantity: {order.quantity}</p>

          <p>Total Price: ₹{order.totalPrice}</p>

          <p>Status: {order.status}</p>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default Orders;