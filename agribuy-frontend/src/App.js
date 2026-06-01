import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>

      <nav style={{ padding: "10px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
		<Link to="/add-product">Add Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
		<Route path="/add-product" element={<AddProduct />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;