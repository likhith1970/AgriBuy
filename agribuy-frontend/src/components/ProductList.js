import React, { useEffect, useState } from "react";
import api from "../api/ApiService";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/api/buyer/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h2>AgriBuy Products</h2>

      {products.map((product) => (
        <div key={product.productId}>
          <h3>{product.productName}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ₹{product.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;