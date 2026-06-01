import React, { useState } from "react";
import api from "../api/ApiService";
import { useNavigate } from "react-router-dom";

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

	  if (role === "FARMER") {
	    navigate("/farmer-dashboard");
	  }
	  else if (role === "DOMESTIC_BUYER") {
	    navigate("/domestic-dashboard");
	  }
	  else if (role === "COMMERCIAL_BUYER") {
	    navigate("/commercial-dashboard");
	  }

	})
    .catch((error) => {
      alert("Login Failed");
      console.error(error);
    });

  };

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;