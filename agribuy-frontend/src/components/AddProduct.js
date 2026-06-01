import React, { useState } from "react";
import api from "../api/ApiService";

function AddProduct() {

  const [product, setProduct] = useState({
    productName: "",
    category: "",
    quantity: "",
    price: "",
    unit: "",
    description: "",
    imageUrl: "",
    farmerId: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    api.post("/api/products", product)
      .then((response) => {
        alert(response.data);
      })
	  .catch((error) => {

	      console.log("FULL ERROR:", error);

	      if (error.response) {

	          console.log("Status:", error.response.status);
	          console.log("Data:", error.response.data);

	          alert(
	              "Status: " +
	              error.response.status +
	              "\n" +
	              JSON.stringify(error.response.data)
	          );

	      } else {

	          alert("Network/CORS Error");

	      }

	  });

  };

  return (
    <div>

      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="productName"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="category"
          placeholder="Category"
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
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="unit"
          placeholder="Unit"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="farmerId"
          placeholder="Farmer ID"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;