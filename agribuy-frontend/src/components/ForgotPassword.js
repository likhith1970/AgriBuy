import React, { useState } from "react";
import api from "../api/ApiService";

function ForgotPassword() {

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    api.post("/api/auth/send-otp", {
      username: username
    })
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to Send OTP");
    });

  };

  return (
    <div>

      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Send OTP
        </button>

      </form>

    </div>
  );
}

export default ForgotPassword;