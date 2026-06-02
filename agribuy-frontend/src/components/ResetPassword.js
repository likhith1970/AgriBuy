import React, { useState } from "react";
import api from "../api/ApiService";

function ResetPassword() {

  const [data, setData] = useState({
    username: "",
    newPassword: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    api.post("/api/auth/reset-password", data)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Password Reset Failed");
      });

  };

  return (
    <div>

      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Reset Password
        </button>

      </form>

    </div>
  );
}

export default ResetPassword;