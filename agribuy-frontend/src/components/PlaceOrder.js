import React, { useState } from "react";
import api from "../api/ApiService";

function PlaceOrder() {

  const [order, setOrder] = useState({
    productId: "",
    buyerId: "",
    farmerId: "",
    quantity: "",
    totalPrice: ""
  });

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    api.post("/api/orders", order)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Order Failed");
      });

  };

  return (
    <div>

      <h2>Place Order</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="productId"
          placeholder="Product ID"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="buyerId"
          placeholder="Buyer ID"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="farmerId"
          placeholder="Farmer ID"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="totalPrice"
          placeholder="Total Price"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default PlaceOrder;