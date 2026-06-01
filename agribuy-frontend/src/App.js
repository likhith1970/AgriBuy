import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import PlaceOrder from "./components/PlaceOrder";
import Orders from "./components/Orders";
import FarmerDashboard from "./components/FarmerDashboard";
import DomesticDashboard from "./components/DomesticDashboard";
import CommercialDashboard from "./components/CommercialDashboard";

function App() {
  return (
    <BrowserRouter>

      <nav style={{ padding: "10px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
		<Link to="/add-product">Add Product</Link> |{" "}
		<Link to="/place-order">Place Order</Link> |{" "}
		<Link to="/orders">Orders</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
		<Route path="/add-product" element={<AddProduct />} />
		<Route path="/place-order" element={<PlaceOrder />} />
		<Route path="/orders" element={<Orders />} />
		<Route path="/farmer-dashboard" element={<FarmerDashboard />} />

		<Route path="/domestic-dashboard" element={<DomesticDashboard />} />

		<Route path="/commercial-dashboard" element={<CommercialDashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;