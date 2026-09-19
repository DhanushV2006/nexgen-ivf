import { useState } from "react";
import "../App.css";

function OTPVerification({ phone, onNavigate }) {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Please enter the 6-digit OTP.");
      return;
    }

    onNavigate("home");
  };

  return (
    <div className="app-background">
      <div className="mobile-app auth-screen">

        <div className="auth-header">

          <button
            className="back-button"
            onClick={() => onNavigate("login")}
          >
            ←
          </button>

          <div className="mini-logo">
            N
          </div>

        </div>

        <div className="auth-content">

          <div className="otp-icon">
            <span>✉</span>
          </div>

          <h1>Verify your number</h1>

          <p>
            Enter the 6-digit verification code sent to
          </p>

          <strong className="otp-phone">
            +91 {phone || "98765 43210"}
          </strong>

          <div className="form-group otp-group">

            <label>Verification Code</label>

            <input
              className="otp-input"
              type="tel"
              maxLength="6"
              placeholder="• • • • • •"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, ""))
              }
            />

          </div>

          <button
            className="primary-button"
            onClick={handleVerify}
          >
            Verify & Continue
          </button>

          <div className="resend-section">

            <p>Didn't receive the code?</p>

            <button
              className="text-button resend-button"
              onClick={() =>
                alert("Demo OTP resent successfully.")
              }
            >
              Resend OTP
            </button>

          </div>

          <div className="demo-otp-box">
            <strong>Demo Mode</strong>
            <span>Enter any 6-digit number to continue.</span>
          </div>

          <div className="auth-terms">
            For emergencies, contact your local emergency
            services. Nexgen IVF is not an emergency-care service.
          </div>

        </div>

      </div>
    </div>
  );
}

export default OTPVerification;