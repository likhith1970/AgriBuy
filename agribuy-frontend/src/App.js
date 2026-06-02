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
import ForgotPassword from "./components/ForgotPassword";
import VerifyOtp from "./components/VerifyOtp";
import ResetPassword from "./components/ResetPassword";

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
		<Link to="/orders">Orders</Link> |{" "}
		<Link to="/forgot-password">Forgot Password</Link> |{" "}
		<Link to="/verify-otp">Verify OTP</Link> |{" "}
		<Link to="/reset-password">Reset Password</Link>
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
		<Route path="/forgot-password" element={<ForgotPassword />} />
		<Route path="/verify-otp" element={<VerifyOtp />} />
		<Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;