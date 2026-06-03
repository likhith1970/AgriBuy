import React, { useState } from "react";
import api from "../api/ApiService";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {

const navigate = useNavigate();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleLogin = (e) => {


e.preventDefault();

api.post("/api/auth/login", {
  username,
  password
})
.then((response) => {

  alert(response.data.message);

  const role = response.data.role;

  console.log("Role from API:", role);

  localStorage.setItem("role", role);

  console.log("Stored Role:", localStorage.getItem("role"));

  if (role === "FARMER") {
    window.location.href = "/farmer-dashboard";
  }
  else if (role === "DOMESTIC_BUYER") {
    window.location.href = "/domestic-dashboard";
  }
  else if (role === "COMMERCIAL_BUYER") {
    window.location.href = "/commercial-dashboard";
  }

})

.catch((error) => {
  alert("Login Failed");
  console.error(error);
});


};

return ( <div className="login-page">


  <div className="top-bar">
    <h2>🌱 AgriBuy</h2>
    <a href="#">About Us</a>
  </div>

  <div className="login-container">

    <div className="login-card">

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

      <div className="login-links">

        <Link to="/forgot-password">
          Forgot Password?
        </Link>

        <Link to="/register">
          Create New Account
        </Link>

      </div>

    </div>

  </div>

  <div className="category-section">

    <h2>Shop By Category</h2>

    <div className="categories">

      <div className="category-card">
        <img src="/images/grains.jpg" alt="Grains" />
        <h3>Grains</h3>
      </div>

      <div className="category-card">
        <img src="/images/vegetables.jpg" alt="Vegetables" />
        <h3>Vegetables</h3>
      </div>

      <div className="category-card">
        <img src="/images/fruits.jpg" alt="Fruits" />
        <h3>Fruits</h3>
      </div>

      <div className="category-card">
        <img src="/images/nonveg.jpg" alt="Non Veg" />
        <h3>Non Veg</h3>
      </div>

      <div className="category-card">
        <img src="/images/dairy.jpg" alt="Dairy" />
        <h3>Dairy Products</h3>
      </div>

    </div>

  </div>

</div>


);
}

export default Login;
