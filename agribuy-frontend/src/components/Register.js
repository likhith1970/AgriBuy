import React, { useState } from "react";
import api from "../api/ApiService";
import "./Register.css";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: "",
    role: "FARMER"
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setErrorMessage("");

    if (
      !formData.username ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phoneNumber
    ) {

      setErrorMessage(
        "Please fill all required fields to register successfully"
      );

      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {

      setErrorMessage(
        "Password must contain at least 8 characters, 1 uppercase letter, 1 number and 1 special character"
      );

      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setErrorMessage(
        "Password and Confirm Password do not match"
      );

      return;
    }

    api.post("/api/auth/register", {

      username: formData.username,
      password: formData.password,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      role: formData.role

    })
    .then((response) => {

      setRegistered(true);

    })
    .catch((error) => {

      console.error(error);

      setErrorMessage(
        "Registration Failed"
      );

    });

  };

  return (

    <div className="register-page">

      <div className="register-card">

        <h2>Create New Account</h2>

        {errorMessage && (

          <div className="error-message">
            {errorMessage}
          </div>

        )}

        {!registered && (

          <form onSubmit={handleSubmit}>

            <input
              name="username"
              placeholder="Username *"
              value={formData.username}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password *"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password *"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              name="phoneNumber"
              placeholder="Phone Number *"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <h4>Select Role</h4>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "20px"
              }}
            >

              <label>
                <input
                  type="radio"
                  name="role"
                  value="FARMER"
                  checked={
                    formData.role === "FARMER"
                  }
                  onChange={handleChange}
                />
                Farmer
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="DOMESTIC_BUYER"
                  checked={
                    formData.role ===
                    "DOMESTIC_BUYER"
                  }
                  onChange={handleChange}
                />
                Domestic Buyer
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="COMMERCIAL_BUYER"
                  checked={
                    formData.role ===
                    "COMMERCIAL_BUYER"
                  }
                  onChange={handleChange}
                />
                Commercial Buyer
              </label>

            </div>

            <button type="submit">
              Register
            </button>

          </form>

        )}

        {registered && (

          <div>

            <h3 className="success-message">
              ✅ You successfully registered
            </h3>

            <a
              href="/login"
              style={{
                color: "#2e7d32",
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              Click Here to Login to AgriBuy
            </a>

          </div>

        )}

      </div>

    </div>

  );
}

export default Register;