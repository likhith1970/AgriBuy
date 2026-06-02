import React, { useState } from "react";
import api from "../api/ApiService";

function VerifyOtp() {

	const [data, setData] = useState({
	  otpCode: ""
	});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    api.post("/api/auth/verify-otp", data)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("OTP Verification Failed");
      });

  };

  return (
    <div>

      <h2>Verify OTP</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <br /><br />

		<input
		  name="otpCode"
		  placeholder="Enter OTP"
		  onChange={handleChange}
		/>

        <br /><br />

        <button type="submit">
          Verify OTP
        </button>

      </form>

    </div>
  );
}

export default VerifyOtp;