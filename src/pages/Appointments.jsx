function Appointments({ booking, onNavigate }) {
  const doctor = booking?.doctor;

  return (
    <div className="app-background">
      <div className="mobile-app">

        {/* -----------------------------
            HEADER
        ----------------------------- */}

        <div className="page-header">
          <button
            className="back-button"
            onClick={() => onNavigate("home")}
          >
            ←
          </button>

          <div>
            <p className="eyebrow">NEXGEN IVF</p>
            <h1>My Appointments</h1>
          </div>
        </div>

        {/* -----------------------------
            UPCOMING
        ----------------------------- */}

        <div className="appointment-section">

          <p className="eyebrow">
            UPCOMING
          </p>

          <h2>
            Your next consultation
          </h2>

          {booking ? (
            <div className="appointment-card">

              <div className="appointment-status">
                <span>●</span>
                Confirmed
              </div>

              <div className="appointment-doctor">

                <div className="appointment-avatar">
                  {doctor?.name
                    ?.split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("") || "DR"}
                </div>

                <div>
                  <h3>
                    {doctor?.name || "Dr. Aishwarya Rao"}
                  </h3>

                  <p>
                    {doctor?.specialization ||
                      "Fertility & IVF Specialist"}
                  </p>

                  <span className="verified-badge">
                    ✓ Verified
                  </span>
                </div>

              </div>

              <div className="appointment-details">

                <div>
                  <span>📅</span>
                  <div>
                    <small>Date</small>
                    <strong>
                      {booking.date || "14 Nov 2026"}
                    </strong>
                  </div>
                </div>

                <div>
                  <span>🕐</span>
                  <div>
                    <small>Time</small>
                    <strong>
                      {booking.time || "10:00 AM"}
                    </strong>
                  </div>
                </div>

                <div>
                  <span>💻</span>
                  <div>
                    <small>Consultation</small>
                    <strong>
                      {booking.consultationType === "in-person"
                        ? "In-person"
                        : "Online"}
                    </strong>
                  </div>
                </div>

                <div>
                  <span>📍</span>
                  <div>
                    <small>Centre</small>
                    <strong>
                      {doctor?.clinic || "Hope Fertility Centre"}
                    </strong>
                  </div>
                </div>

              </div>

              <div className="appointment-actions">

                <button
                  className="primary-button"
                  onClick={() =>
                    alert(
                      "Demo: Appointment details will open here."
                    )
                  }
                >
                  View Details
                </button>

                <button
                  className="appointment-secondary"
                  onClick={() =>
                    alert(
                      "Demo: Rescheduling will be connected in the full product."
                    )
                  }
                >
                  Reschedule
                </button>

              </div>

            </div>
          ) : (
            <div className="empty-state">

              <div className="empty-icon">
                📅
              </div>

              <h3>
                No upcoming appointments
              </h3>

              <p>
                Your booked consultations will appear here.
              </p>

              <button
                className="primary-button"
                onClick={() =>
                  onNavigate("specialists")
                }
              >
                Find a Specialist
              </button>

            </div>
          )}

        </div>

        {/* -----------------------------
            PAST APPOINTMENTS
        ----------------------------- */}

        <div className="appointment-section">

          <p className="eyebrow">
            HISTORY
          </p>

          <h2>
            Previous consultations
          </h2>

          <div className="past-appointment-card">

            <div className="past-appointment-icon">
              ✓
            </div>

            <div>
              <strong>
                Initial fertility consultation
              </strong>

              <p>
                Example appointment · Completed
              </p>
            </div>

          </div>

        </div>

        {/* -----------------------------
            DISCLAIMER
        ----------------------------- */}

        <div className="healthcare-disclaimer">

          <strong>
            Medical care
          </strong>

          <p>
            Appointments are provided by registered
            healthcare professionals at partner
            centres. Nexgen IVF is a technology and
            care-coordination platform.
          </p>

        </div>

        {/* -----------------------------
            BOTTOM NAVIGATION
        ----------------------------- */}

        <div className="bottom-navigation">

          <button
            onClick={() => onNavigate("home")}
          >
            <span>⌂</span>
            <small>Home</small>
          </button>

          <button
            onClick={() => onNavigate("specialists")}
          >
            <span>♙</span>
            <small>Specialists</small>
          </button>

          <button
            onClick={() => onNavigate("centres")}
          >
            <span>▣</span>
            <small>Centres</small>
          </button>

          <button
            onClick={() => onNavigate("journey")}
          >
            <span>◉</span>
            <small>Journey</small>
          </button>

          <button
            onClick={() => onNavigate("profile")}
          >
            <span>●</span>
            <small>Profile</small>
          </button>

        </div>

      </div>
    </div>
  );
}

export default Appointments;