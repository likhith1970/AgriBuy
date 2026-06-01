import React, { useState } from "react";
import api from "../api/ApiService";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    role: "FARMER"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Register button clicked");
    console.log(formData);

    api.post("/api/auth/register", formData)
      .then((response) => {

        console.log("Success:", response);

        alert(response.data);

      })
      .catch((error) => {

        console.log("FULL ERROR:", error);

        if (error.response) {

          console.log("Status:", error.response.status);
          console.log("Data:", error.response.data);

          alert(
            "Error: " +
            JSON.stringify(error.response.data)
          );

        } else {

          alert("Network/CORS Error");

        }

      });

  };

  return (
    <div>

      <h2>Register User</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <br /><br />

        <h4>Select Role</h4>

        <div style={{ display: "flex", gap: "20px" }}>

          <label>
            <input
              type="radio"
              name="role"
              value="FARMER"
              checked={formData.role === "FARMER"}
              onChange={handleChange}
            />
            Farmer
          </label>

          <label>
            <input
              type="radio"
              name="role"
              value="DOMESTIC_BUYER"
              checked={formData.role === "DOMESTIC_BUYER"}
              onChange={handleChange}
            />
            Domestic Buyer
          </label>

          <label>
            <input
              type="radio"
              name="role"
              value="COMMERCIAL_BUYER"
              checked={formData.role === "COMMERCIAL_BUYER"}
              onChange={handleChange}
            />
            Commercial Buyer
          </label>

        </div>

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );

}

export default Register;