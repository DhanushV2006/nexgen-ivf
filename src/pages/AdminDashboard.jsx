function AdminDashboard({ onNavigate }) {
  return (
    <div className="app-background">
      <div className="mobile-app">

        {/* -----------------------------
            HEADER
        ----------------------------- */}

        <div className="admin-header">

          <div>
            <p className="eyebrow">
              NEXGEN IVF · ADMIN
            </p>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Platform overview & operations
            </p>
          </div>

          <div className="admin-avatar">
            A
          </div>

        </div>

        {/* -----------------------------
            PLATFORM STATUS
        ----------------------------- */}

        <div className="admin-status-card">

          <div>
            <span className="admin-status-dot">
              ●
            </span>

            <strong>
              Platform operational
            </strong>

            <p>
              All core services are running normally.
            </p>
          </div>

          <span className="admin-status-label">
            LIVE
          </span>

        </div>

        {/* -----------------------------
            KEY METRICS
        ----------------------------- */}

        <div className="admin-section">

          <p className="eyebrow">
            OVERVIEW
          </p>

          <h2>
            Platform metrics
          </h2>

          <div className="admin-stat-grid">

            <div className="admin-stat-card">
              <span>👥</span>
              <strong>2,486</strong>
              <small>Patients</small>
              <em>+12.4%</em>
            </div>

            <div className="admin-stat-card">
              <span>🧑‍⚕️</span>
              <strong>184</strong>
              <small>Verified Doctors</small>
              <em>+8.2%</em>
            </div>

            <div className="admin-stat-card">
              <span>🏥</span>
              <strong>37</strong>
              <small>Partner Centres</small>
              <em>+5.7%</em>
            </div>

            <div className="admin-stat-card">
              <span>📅</span>
              <strong>624</strong>
              <small>Appointments</small>
              <em>+15.1%</em>
            </div>

          </div>

        </div>

        {/* -----------------------------
            VERIFICATION QUEUE
        ----------------------------- */}

        <div className="admin-section">

          <div className="admin-section-heading">

            <div>
              <p className="eyebrow">
                ACTION REQUIRED
              </p>

              <h2>
                Verification queue
              </h2>
            </div>

            <span className="admin-count">
              12
            </span>

          </div>

          <div className="admin-queue-card">

            <div className="admin-queue-icon">
              🧑‍⚕️
            </div>

            <div>
              <strong>
                Doctor verification
              </strong>

              <p>
                8 professional profiles awaiting review
              </p>
            </div>

            <button
              onClick={() =>
                alert("Demo: Doctor verification queue")
              }
            >
              →
            </button>

          </div>

          <div className="admin-queue-card">

            <div className="admin-queue-icon">
              🏥
            </div>

            <div>
              <strong>
                Centre verification
              </strong>

              <p>
                4 partner applications awaiting review
              </p>
            </div>

            <button
              onClick={() =>
                alert("Demo: Centre verification queue")
              }
            >
              →
            </button>

          </div>

        </div>

        {/* -----------------------------
            RECENT ACTIVITY
        ----------------------------- */}

        <div className="admin-section">

          <p className="eyebrow">
            RECENT ACTIVITY
          </p>

          <h2>
            Platform activity
          </h2>

          <div className="admin-activity-card">

            <div className="activity-icon">
              ✓
            </div>

            <div>
              <strong>
                New partner centre verified
              </strong>

              <p>
                Bloom Fertility Centre
              </p>

              <small>
                18 minutes ago
              </small>
            </div>

          </div>

          <div className="admin-activity-card">

            <div className="activity-icon">
              +
            </div>

            <div>
              <strong>
                New patient registered
              </strong>

              <p>
                Patient account created
              </p>

              <small>
                42 minutes ago
              </small>
            </div>

          </div>

          <div className="admin-activity-card">

            <div className="activity-icon">
              📅
            </div>

            <div>
              <strong>
                Appointment completed
              </strong>

              <p>
                Specialist consultation
              </p>

              <small>
                1 hour ago
              </small>
            </div>

          </div>

        </div>

        {/* -----------------------------
            MANAGEMENT
        ----------------------------- */}

        <div className="admin-section">

          <p className="eyebrow">
            MANAGEMENT
          </p>

          <div className="admin-management-grid">

            <button
              onClick={() =>
                alert("Demo: Patient management")
              }
            >
              <span>👥</span>
              <strong>Patients</strong>
              <small>Manage users</small>
            </button>

            <button
              onClick={() =>
                alert("Demo: Doctor management")
              }
            >
              <span>🧑‍⚕️</span>
              <strong>Doctors</strong>
              <small>Verification</small>
            </button>

            <button
              onClick={() =>
                alert("Demo: Centre management")
              }
            >
              <span>🏥</span>
              <strong>Centres</strong>
              <small>Partners</small>
            </button>

            <button
              onClick={() =>
                alert("Demo: Appointment management")
              }
            >
              <span>📅</span>
              <strong>Appointments</strong>
              <small>Bookings</small>
            </button>

            <button
              onClick={() =>
                alert("Demo: Analytics")
              }
            >
              <span>📊</span>
              <strong>Analytics</strong>
              <small>Platform data</small>
            </button>

            <button
              onClick={() =>
                alert("Demo: Reports")
              }
            >
              <span>📄</span>
              <strong>Reports</strong>
              <small>Export data</small>
            </button>

          </div>

        </div>

        {/* -----------------------------
            REVENUE
        ----------------------------- */}

        <div className="admin-revenue-card">

          <div>
            <p className="eyebrow">
              THIS MONTH
            </p>

            <h2>
              Platform bookings
            </h2>

            <p>
              Illustrative prototype metrics
            </p>
          </div>

          <strong>
            ₹18.6L
          </strong>

        </div>

        {/* -----------------------------
            DISCLAIMER
        ----------------------------- */}

        <div className="admin-disclaimer">

          <strong>
            Admin prototype
          </strong>

          <p>
            All metrics, patient records, revenue figures
            and activity shown in this dashboard are
            fictional sample data for demonstration.
          </p>

        </div>

        {/* -----------------------------
            RETURN
        ----------------------------- */}

        <button
          className="clinic-exit-button"
          onClick={() => onNavigate("home")}
        >
          ← Return to Patient App
        </button>

      </div>
    </div>
  );
}

export default AdminDashboard;