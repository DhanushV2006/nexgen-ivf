function Profile({ onNavigate }) {
  return (
    <div className="app-background">
      <div className="mobile-app">

        {/* -----------------------------
            HEADER
        ----------------------------- */}

        <div className="profile-page-header">

          <div className="profile-large-avatar">
            P
          </div>

          <div>
            <p className="eyebrow">
              NEXGEN IVF
            </p>

            <h1>
              Priya Sharma
            </h1>

            <p>
              Patient account
            </p>
          </div>

        </div>

        {/* -----------------------------
            PROFILE CARD
        ----------------------------- */}

        <div className="profile-account-card">

          <div className="profile-row">
            <span>👤</span>

            <div>
              <small>Name</small>
              <strong>Priya Sharma</strong>
            </div>

            <span className="profile-arrow">
              →
            </span>
          </div>

          <div className="profile-row">
            <span>📱</span>

            <div>
              <small>Phone</small>
              <strong>+91 82172 53421</strong>
            </div>

            <span className="profile-arrow">
              →
            </span>
          </div>

          <div className="profile-row">
            <span>✉️</span>

            <div>
              <small>Email</small>
              <strong>priya@example.com</strong>
            </div>

            <span className="profile-arrow">
              →
            </span>
          </div>

        </div>

        {/* -----------------------------
            QUICK LINKS
        ----------------------------- */}

        <div className="profile-section">

          <p className="eyebrow">
            MY CARE
          </p>

          <div className="profile-menu">

            <button
              onClick={() => onNavigate("appointments")}
            >
              <span>📅</span>

              <div>
                <strong>My Appointments</strong>
                <small>
                  View upcoming consultations
                </small>
              </div>

              <b>→</b>
            </button>

            <button
              onClick={() => onNavigate("documents")}
            >
              <span>📄</span>

              <div>
                <strong>My Documents</strong>
                <small>
                  Reports and uploaded files
                </small>
              </div>

              <b>→</b>
            </button>

            <button
              onClick={() => onNavigate("journey")}
            >
              <span>◉</span>

              <div>
                <strong>My Journey</strong>
                <small>
                  Track your care journey
                </small>
              </div>

              <b>→</b>
            </button>

          </div>

        </div>

        {/* -----------------------------
            SETTINGS
        ----------------------------- */}

        <div className="profile-section">

          <p className="eyebrow">
            SETTINGS
          </p>

          <div className="profile-menu">

            <button
              onClick={() =>
                alert("Demo: Notification settings")
              }
            >
              <span>🔔</span>

              <div>
                <strong>Notifications</strong>
                <small>
                  Manage appointment reminders
                </small>
              </div>

              <b>→</b>
            </button>

            <button
              onClick={() =>
                alert("Demo: Privacy settings")
              }
            >
              <span>🔒</span>

              <div>
                <strong>Privacy & Consent</strong>
                <small>
                  Manage your information preferences
                </small>
              </div>

              <b>→</b>
            </button>

            <button
              onClick={() =>
                alert("Demo: Support centre")
              }
            >
              <span>❓</span>

              <div>
                <strong>Help & Support</strong>
                <small>
                  Get help with Nexgen IVF
                </small>
              </div>

              <b>→</b>
            </button>

          </div>

        </div>

        {/* -----------------------------
            PLATFORM NOTICE
        ----------------------------- */}

        <div className="profile-platform-notice">

          <strong>
            About Nexgen IVF
          </strong>

          <p>
            Nexgen IVF is a technology and
            care-coordination platform connecting
            patients with verified fertility
            professionals and partner centres.
          </p>

          <p>
            Medical decisions and services are
            provided by qualified healthcare
            professionals.
          </p>

        </div>

        <button
          className="logout-button"
          onClick={() =>
            alert("Demo: Logout")
          }
        >
          Log out
        </button>

        {/* -----------------------------
            BOTTOM NAVIGATION
        ----------------------------- */}

        <div className="bottom-navigation">

          <button onClick={() => onNavigate("home")}>
            <span>⌂</span>
            <small>Home</small>
          </button>

          <button onClick={() => onNavigate("specialists")}>
            <span>♙</span>
            <small>Specialists</small>
          </button>

          <button onClick={() => onNavigate("centres")}>
            <span>▣</span>
            <small>Centres</small>
          </button>

          <button onClick={() => onNavigate("journey")}>
            <span>◉</span>
            <small>Journey</small>
          </button>

          <button className="active">
            <span>●</span>
            <small>Profile</small>
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;