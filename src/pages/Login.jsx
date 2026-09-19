import { useState } from "react";
import "../App.css";

function Login({ onNavigate }) {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    onNavigate("otp", phone);
  };

  return (
    <div className="app-background">
      <div className="mobile-app auth-screen">

        <div className="auth-header">

          <button
            className="back-button"
            onClick={() => onNavigate("onboarding")}
          >
            ←
          </button>

          <div className="mini-logo">
            N
          </div>

        </div>

        <div className="auth-content">

          <div className="auth-icon">
            <span>✦</span>
          </div>

          <h1>Welcome to Nexgen IVF</h1>

          <p>
            Sign in to continue your fertility-care journey.
          </p>

          <div className="form-group">

            <label>Mobile Number</label>

            <div className="phone-input">

              <span className="country-code">
                +91
              </span>

              <input
                type="tel"
                maxLength="10"
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
              />

            </div>

          </div>

          <button
            className="primary-button"
            onClick={handleContinue}
          >
            Continue
          </button>

          <div className="auth-security">
            <span>🔒</span>
            <p>
              We'll send a one-time verification code to
              your mobile number.
            </p>
          </div>

          <div className="auth-terms">
            By continuing, you agree to the platform's
            Terms and Privacy Policy.
          </div>

          <div className="demo-label">
            DEMO PROTOTYPE
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;