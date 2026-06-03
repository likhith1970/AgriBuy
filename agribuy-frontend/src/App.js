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
import Logout from "./components/Logout";

function App() {

const isLoggedIn = localStorage.getItem("role");

return ( <BrowserRouter>


  {isLoggedIn && (

    <nav style={{ padding: "10px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/add-product">Add Product</Link> |{" "}
      <Link to="/place-order">Place Order</Link> |{" "}
      <Link to="/orders">Orders</Link> |{" "}
	  <Link to="/logout">Logout</Link>
    </nav>

  )}

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
	<Route path="/logout" element={<Logout />} />
  </Routes>

</BrowserRouter>


);
}

export default App;
