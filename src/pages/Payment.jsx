import { useState } from "react";
import "../App.css";

function Payment({ booking, onNavigate }) {
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [processing, setProcessing] = useState(false);

  if (!booking || !booking.doctor) {
    return (
      <div className="app-background">
        <div className="mobile-app">

          <button
            className="back-button"
            onClick={() => onNavigate("home")}
          >
            ←
          </button>

          <div className="empty-state">
            <div>💳</div>

            <h3>Payment information unavailable</h3>

            <p>
              Please create a booking before making
              a payment.
            </p>
          </div>

        </div>
      </div>
    );
  }

  const { doctor, date, time, consultationType } = booking;

  const handlePayment = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);

      onNavigate("appointment-success", booking);
    }, 1500);
  };

  return (
    <div className="app-background">

      <div className="mobile-app payment-screen">

        {/* Header */}

        <div className="payment-header">

          <button
            className="back-button"
            onClick={() =>
              onNavigate("booking-review")
            }
          >
            ←
          </button>

          <div>
            <h2>Payment</h2>

            <span>
              Complete your consultation booking
            </span>
          </div>

        </div>

        {/* Progress */}

        <div className="booking-progress">

          <div className="progress-step completed">
            <span>✓</span>
            Date & Time
          </div>

          <div className="progress-line completed-line"></div>

          <div className="progress-step completed">
            <span>✓</span>
            Details
          </div>

          <div className="progress-line completed-line"></div>

          <div className="progress-step active">
            <span>3</span>
            Confirm
          </div>

        </div>

        {/* Appointment Summary */}

        <section className="payment-section">

          <h3>Appointment summary</h3>

          <div className="payment-appointment">

            <div className="payment-doctor-avatar">
              {doctor.name
                .replace("Dr. ", "")
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </div>

            <div>

              <strong>
                {doctor.name}
              </strong>

              <span>
                {doctor.specialization}
              </span>

              <small>
                {doctor.clinic}
              </small>

            </div>

          </div>

          <div className="payment-appointment-details">

            <div>
              <span>Date</span>
              <strong>
                November {date}, 2026
              </strong>
            </div>

            <div>
              <span>Time</span>
              <strong>
                {time}
              </strong>
            </div>

            <div>
              <span>Type</span>
              <strong>
                {consultationType}
              </strong>
            </div>

          </div>

        </section>

        {/* Payment Method */}

        <section className="payment-section">

          <h3>Payment method</h3>

          <div className="payment-methods">

            {/* UPI */}

            <button
              className={
                paymentMethod === "UPI"
                  ? "payment-method selected"
                  : "payment-method"
              }
              onClick={() =>
                setPaymentMethod("UPI")
              }
            >

              <div className="payment-method-icon">
                UPI
              </div>

              <div>
                <strong>
                  UPI
                </strong>

                <span>
                  Google Pay, PhonePe, Paytm
                </span>
              </div>

              <div className="payment-radio">
                {paymentMethod === "UPI"
                  ? "●"
                  : "○"}
              </div>

            </button>

            {/* Card */}

            <button
              className={
                paymentMethod === "Card"
                  ? "payment-method selected"
                  : "payment-method"
              }
              onClick={() =>
                setPaymentMethod("Card")
              }
            >

              <div className="payment-method-icon card-icon">
                💳
              </div>

              <div>
                <strong>
                  Credit / Debit Card
                </strong>

                <span>
                  Visa, Mastercard, RuPay
                </span>
              </div>

              <div className="payment-radio">
                {paymentMethod === "Card"
                  ? "●"
                  : "○"}
              </div>

            </button>

            {/* Net Banking */}

            <button
              className={
                paymentMethod === "Net Banking"
                  ? "payment-method selected"
                  : "payment-method"
              }
              onClick={() =>
                setPaymentMethod("Net Banking")
              }
            >

              <div className="payment-method-icon bank-icon">
                🏦
              </div>

              <div>
                <strong>
                  Net Banking
                </strong>

                <span>
                  All major Indian banks
                </span>
              </div>

              <div className="payment-radio">
                {paymentMethod === "Net Banking"
                  ? "●"
                  : "○"}
              </div>

            </button>

          </div>

        </section>

        {/* Price */}

        <section className="payment-section">

          <h3>Payment details</h3>

          <div className="payment-breakdown">

            <div>
              <span>
                Consultation fee
              </span>

              <strong>
                {doctor.fee}
              </strong>
            </div>

            <div>
              <span>
                Platform fee
              </span>

              <strong>
                ₹0
              </strong>
            </div>

            <div className="payment-total">

              <span>
                Total payable
              </span>

              <strong>
                {doctor.fee}
              </strong>

            </div>

          </div>

        </section>

        {/* Security */}

        <div className="payment-security">

          <div className="security-icon">
            🔒
          </div>

          <div>

            <strong>
              Secure payment
            </strong>

            <p>
              Payment information is securely handled.
              Nexgen IVF does not provide medical advice
              or treatment through this payment flow.
            </p>

          </div>

        </div>

        {/* Pay Button */}

        <button
          className="primary-button pay-button"
          onClick={handlePayment}
          disabled={processing}
        >

          {processing
            ? "Processing payment..."
            : `Pay ${doctor.fee}`}

        </button>

        <p className="payment-demo-note">
          Demo prototype — no real payment will be
          processed.
        </p>

      </div>

    </div>
  );
}

export default Payment;