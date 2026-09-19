import "../App.css";

function AppointmentSuccess({ booking, onNavigate }) {
  if (!booking || !booking.doctor) {
    return (
      <div className="app-background">
        <div className="mobile-app">

          <div className="empty-state">

            <div>📅</div>

            <h3>
              Appointment information unavailable
            </h3>

            <p>
              Please return to your home screen.
            </p>

            <button
              className="primary-button"
              onClick={() => onNavigate("home")}
            >
              Go to Home
            </button>

          </div>

        </div>
      </div>
    );
  }

  const {
    doctor,
    date,
    time,
    consultationType,
  } = booking;

  return (
    <div className="app-background">

      <div className="mobile-app success-screen">

        {/* Success Icon */}

        <div className="success-icon-wrapper">

          <div className="success-icon">
            ✓
          </div>

        </div>

        {/* Heading */}

        <h1 className="success-title">
          Appointment Confirmed!
        </h1>

        <p className="success-subtitle">
          Your consultation has been successfully
          scheduled.
        </p>

        {/* Confirmation ID */}

        <div className="confirmation-id">

          <span>
            Booking ID
          </span>

          <strong>
            NXG-2026-10428
          </strong>

        </div>

        {/* Appointment Card */}

        <div className="success-card">

          <div className="success-card-title">
            <span>
              📅
            </span>

            <strong>
              Appointment details
            </strong>
          </div>

          {/* Doctor */}

          <div className="success-doctor">

            <div className="success-avatar">
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

          {/* Details */}

          <div className="success-details">

            <div>

              <span>
                Date
              </span>

              <strong>
                November {date}, 2026
              </strong>

            </div>

            <div>

              <span>
                Time
              </span>

              <strong>
                {time}
              </strong>

            </div>

            <div>

              <span>
                Consultation
              </span>

              <strong>
                {consultationType}
              </strong>

            </div>

            <div>

              <span>
                Clinic
              </span>

              <strong>
                {doctor.clinic}
              </strong>

            </div>

          </div>

          {/* Location */}

          {consultationType === "In-person" && (
            <div className="success-location">

              <span>
                📍
              </span>

              <div>

                <strong>
                  {doctor.clinic}
                </strong>

                <small>
                  {doctor.location}
                </small>

              </div>

            </div>
          )}

          {/* Online */}

          {consultationType === "Online" && (
            <div className="success-location online">

              <span>
                💻
              </span>

              <div>

                <strong>
                  Online consultation
                </strong>

                <small>
                  Joining instructions will be
                  available before the appointment.
                </small>

              </div>

            </div>
          )}

        </div>

        {/* Payment Status */}

        <div className="success-payment">

          <div>

            <span>
              Payment status
            </span>

            <strong>
              Paid
            </strong>

          </div>

          <strong>
            {doctor.fee}
          </strong>

        </div>

        {/* Important Notice */}

        <div className="success-notice">

          <span>
            ℹ️
          </span>

          <p>
            Medical advice, diagnosis and treatment
            decisions are provided by the registered
            healthcare professional, not by Nexgen IVF.
          </p>

        </div>

        {/* Actions */}

        <button
          className="primary-button success-primary"
          onClick={() =>
            onNavigate("journey", booking)
          }
        >
          View My Journey
        </button>

        <button
          className="secondary-success-button"
          onClick={() =>
            onNavigate("appointments", booking)
          }
        >
          View Appointment
        </button>

        <button
          className="success-home-button"
          onClick={() =>
            onNavigate("home")
          }
        >
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default AppointmentSuccess;