function PartnerClinic({ onNavigate }) {
  return (
    <div className="app-background">
      <div className="mobile-app">

        {/* -----------------------------
            HEADER
        ----------------------------- */}

        <div className="clinic-dashboard-header">

          <div>
            <p className="eyebrow">
              NEXGEN IVF · PARTNER PORTAL
            </p>

            <h1>
              Hope Fertility Centre
            </h1>

            <p>
              Bengaluru · Verified Partner
            </p>
          </div>

          <div className="clinic-status">
            ● Online
          </div>

        </div>

        {/* -----------------------------
            WELCOME
        ----------------------------- */}

        <div className="clinic-welcome-card">

          <div>
            <span>
              Good morning 👋
            </span>

            <h2>
              Clinic dashboard
            </h2>

            <p>
              Manage appointments, enquiries and
              your partner network activity.
            </p>
          </div>

          <div className="clinic-dashboard-icon">
            🏥
          </div>

        </div>

        {/* -----------------------------
            QUICK STATS
        ----------------------------- */}

        <div className="clinic-stat-grid">

          <div className="clinic-stat-card">
            <span>📅</span>
            <strong>18</strong>
            <small>Appointments</small>
          </div>

          <div className="clinic-stat-card">
            <span>👥</span>
            <strong>42</strong>
            <small>New Enquiries</small>
          </div>

          <div className="clinic-stat-card">
            <span>🧑‍⚕️</span>
            <strong>6</strong>
            <small>Doctors</small>
          </div>

          <div className="clinic-stat-card">
            <span>₹</span>
            <strong>₹2.4L</strong>
            <small>Booking Value</small>
          </div>

        </div>

        {/* -----------------------------
            TODAY
        ----------------------------- */}

        <div className="clinic-section">

          <div className="clinic-section-heading">
            <div>
              <p className="eyebrow">
                TODAY
              </p>

              <h2>
                Upcoming appointments
              </h2>
            </div>

            <button
              onClick={() =>
                alert("Demo: View all appointments")
              }
            >
              View all
            </button>
          </div>

          <div className="clinic-appointment-card">

            <div className="clinic-patient-avatar">
              PS
            </div>

            <div className="clinic-appointment-info">

              <strong>
                Priya Sharma
              </strong>

              <p>
                Fertility Consultation
              </p>

              <span>
                Today · 10:00 AM · Online
              </span>

            </div>

            <span className="clinic-confirmed">
              Confirmed
            </span>

          </div>

          <div className="clinic-appointment-card">

            <div className="clinic-patient-avatar">
              AK
            </div>

            <div className="clinic-appointment-info">

              <strong>
                Ananya Kumar
              </strong>

              <p>
                IVF Consultation
              </p>

              <span>
                Today · 12:00 PM · In-person
              </span>

            </div>

            <span className="clinic-confirmed">
              Confirmed
            </span>

          </div>

        </div>

        {/* -----------------------------
            LEADS
        ----------------------------- */}

        <div className="clinic-section">

          <div className="clinic-section-heading">

            <div>
              <p className="eyebrow">
                PATIENT ENQUIRIES
              </p>

              <h2>
                Recent leads
              </h2>
            </div>

            <button
              onClick={() =>
                alert("Demo: View all leads")
              }
            >
              View all
            </button>

          </div>

          <div className="clinic-lead-card">

            <div className="clinic-lead-avatar">
              RS
            </div>

            <div>
              <strong>
                Rahul & Sneha
              </strong>

              <p>
                Interested in fertility consultation
              </p>

              <small>
                25 minutes ago
              </small>
            </div>

            <button
              onClick={() =>
                alert("Demo: Lead details")
              }
            >
              →
            </button>

          </div>

          <div className="clinic-lead-card">

            <div className="clinic-lead-avatar">
              MK
            </div>

            <div>
              <strong>
                Meera K.
              </strong>

              <p>
                Asked about IVF consultation
              </p>

              <small>
                1 hour ago
              </small>
            </div>

            <button
              onClick={() =>
                alert("Demo: Lead details")
              }
            >
              →
            </button>

          </div>

        </div>

        {/* -----------------------------
            PERFORMANCE
        ----------------------------- */}

        <div className="clinic-performance-card">

          <div>
            <p className="eyebrow">
              THIS MONTH
            </p>

            <h2>
              Partner performance
            </h2>

            <p>
              Booking activity from the Nexgen IVF
              platform.
            </p>
          </div>

          <div className="performance-number">
            +24%
          </div>

        </div>

        {/* -----------------------------
            QUICK ACTIONS
        ----------------------------- */}

        <div className="clinic-section">

          <p className="eyebrow">
            QUICK ACTIONS
          </p>

          <div className="clinic-action-grid">

            <button
              onClick={() =>
                alert("Demo: Manage doctors")
              }
            >
              <span>🧑‍⚕️</span>
              <strong>Doctors</strong>
              <small>Manage team</small>
            </button>

            <button
              onClick={() =>
                alert("Demo: Clinic profile")
              }
            >
              <span>🏥</span>
              <strong>Clinic Profile</strong>
              <small>Update details</small>
            </button>

            <button
              onClick={() =>
                alert("Demo: Reports")
              }
            >
              <span>📊</span>
              <strong>Reports</strong>
              <small>View analytics</small>
            </button>

            <button
              onClick={() =>
                alert("Demo: Documents")
              }
            >
              <span>📄</span>
              <strong>Documents</strong>
              <small>Manage files</small>
            </button>

          </div>

        </div>

        {/* -----------------------------
            FOOTER
        ----------------------------- */}

        <div className="clinic-disclaimer">

          <strong>
            Partner portal
          </strong>

          <p>
            This is a high-fidelity prototype.
            Clinic metrics and patient information
            shown here are fictional sample data.
          </p>

        </div>

        <button
          className="clinic-exit-button"
          onClick={() =>
            onNavigate("home")
          }
        >
          ← Return to Patient App
        </button>

      </div>
    </div>
  );
}

export default PartnerClinic;