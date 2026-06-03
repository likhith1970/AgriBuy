import React, { useState } from "react";
import api from "../api/ApiService";
import "./ForgotPassword.css";

function ForgotPassword() {

  const [username, setUsername] = useState("");
  const [otpCode, setOtpCode] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  const sendOtp = (e) => {

    e.preventDefault();

    api.post("/api/auth/send-otp", {
      username
    })
    .then((response) => {

      alert(response.data);

      setOtpSent(true);

    })
    .catch((error) => {

      console.error(error);

      alert("Failed to Send OTP");

    });

  };

  const verifyOtp = (e) => {

    e.preventDefault();

    api.post("/api/auth/verify-otp", {
      otpCode
    })
    .then((response) => {

      alert(response.data);

      setOtpVerified(true);

    })
    .catch((error) => {

      console.error(error);

      alert("OTP Verification Failed");

    });

  };

  const resetPassword = (e) => {

    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordRegex.test(newPassword)) {

      alert(
        "Password must contain at least 8 characters, 1 uppercase letter, 1 number and 1 special character."
      );

      return;
    }

    if (newPassword !== confirmPassword) {

      alert("Passwords do not match");

      return;
    }

    api.post("/api/auth/reset-password", {

      username,
      newPassword

    })
    .then((response) => {

      alert(response.data);

      setOtpVerified(false);

      setPasswordReset(true);

    })
    .catch((error) => {

      console.error(error);

      alert("Password Reset Failed");

    });

  };

  return (

    <div className="forgot-page">

      <div className="forgot-card">

        <h2>Forgot Password</h2>

        {!passwordReset && (

          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)}
            />

            {!otpSent && (

              <button onClick={sendOtp}>
                Send OTP
              </button>

            )}

            {otpSent && !otpVerified && (

              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otpCode}
                  onChange={(e) =>
                    setOtpCode(e.target.value)}
                />

                <button onClick={verifyOtp}>
                  Verify OTP
                </button>
              </>

            )}

            {otpVerified && (

              <>
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)}
                />

                <button onClick={resetPassword}>
                  Save Password
                </button>
              </>

            )}

          </>

        )}

        {passwordReset && (

          <div style={{ marginTop: "20px" }}>

            <h3 style={{ color: "green" }}>
              ✅ You have successfully reset your password
            </h3>

            <a
              href="/login"
              style={{
                color: "#2e7d32",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "18px"
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

export default ForgotPassword;