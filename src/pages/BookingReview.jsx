import "../App.css";

function BookingReview({ booking, onNavigate }) {
  if (!booking || !booking.doctor) {
    return (
      <div className="app-background">
        <div className="mobile-app">

          <button
            className="back-button"
            onClick={() => onNavigate("specialists")}
          >
            ←
          </button>

          <div className="empty-state">
            <div>📅</div>

            <h3>Booking information unavailable</h3>

            <p>
              Please select a specialist and create
              a booking again.
            </p>
          </div>

        </div>
      </div>
    );
  }

  const { doctor, date, time, consultationType } = booking;

  return (
    <div className="app-background">

      <div className="mobile-app review-screen">

        {/* Header */}

        <div className="review-header">

          <button
            className="back-button"
            onClick={() => onNavigate("booking")}
          >
            ←
          </button>

          <div>
            <h2>Review Booking</h2>

            <span>
              Check your details before continuing
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

          <div className="progress-step active">
            <span>2</span>
            Details
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>3</span>
            Confirm
          </div>

        </div>

        {/* Doctor */}

        <section className="review-section">

          <h3>Specialist</h3>

          <div className="review-doctor">

            <div className="review-avatar">
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
                ✓ Verified specialist
              </small>

            </div>

          </div>

        </section>

        {/* Appointment Details */}

        <section className="review-section">

          <h3>Appointment details</h3>

          <div className="detail-card">

            <div className="detail-row">

              <div className="detail-icon">
                📅
              </div>

              <div>
                <span>Date</span>
                <strong>
                  November {date}, 2026
                </strong>
              </div>

            </div>

            <div className="detail-row">

              <div className="detail-icon">
                🕐
              </div>

              <div>
                <span>Time</span>
                <strong>
                  {time}
                </strong>
              </div>

            </div>

            <div className="detail-row">

              <div className="detail-icon">
                {consultationType === "Online"
                  ? "💻"
                  : "🏥"}
              </div>

              <div>
                <span>Consultation type</span>

                <strong>
                  {consultationType}
                </strong>
              </div>

            </div>

            {consultationType === "In-person" && (
              <div className="clinic-location">

                <span>Clinic</span>

                <strong>
                  {doctor.clinic}
                </strong>

                <small>
                  📍 {doctor.location}
                </small>

              </div>
            )}

          </div>

        </section>

        {/* Patient Details */}

        <section className="review-section">

          <div className="section-title-with-action">

            <h3>Patient details</h3>

            <button>
              Edit
            </button>

          </div>

          <div className="patient-detail-card">

            <div>
              <span>Patient name</span>

              <strong>
                Priya Sharma
              </strong>
            </div>

            <div>
              <span>Mobile number</span>

              <strong>
                +91 82172 53421
              </strong>
            </div>

            <div>
              <span>Email</span>

              <strong>
                priya@example.com
              </strong>
            </div>

          </div>

        </section>

        {/* Payment Summary */}

        <section className="review-section">

          <h3>Payment summary</h3>

          <div className="payment-summary">

            <div>
              <span>Consultation fee</span>

              <strong>
                {doctor.fee}
              </strong>
            </div>

            <div>
              <span>Platform fee</span>

              <strong>
                ₹0
              </strong>
            </div>

            <div className="total-row">

              <span>Total</span>

              <strong>
                {doctor.fee}
              </strong>

            </div>

          </div>

        </section>

        {/* Trust Message */}

        <div className="secure-review">

          <span>🔒</span>

          <div>

            <strong>
              Secure & private
            </strong>

            <p>
              Your booking information is handled
              securely. Medical decisions remain
              with your qualified healthcare provider.
            </p>

          </div>

        </div>

        {/* Continue */}

        <button
          className="primary-button review-continue"
          onClick={() =>
            onNavigate("payment", booking)
          }
        >
          Continue to Payment
        </button>

        <p className="booking-policy">
          By continuing, you agree to the appointment
          and cancellation policy shown by the partner
          doctor or clinic.
        </p>

      </div>

    </div>
  );
}

export default BookingReview;