import "../App.css";

function Home({ onNavigate }) {
  return (
    <div className="app-background">

      <div className="mobile-app home-screen">

        {/* Header */}
        <div className="home-header">

          <div>
            <span className="greeting">
              Good morning
            </span>

            <h2>Priya 👋</h2>
          </div>

          <button
            className="profile-avatar"
            onClick={() => onNavigate("profile")}
          >
            P
          </button>

        </div>

        {/* Search */}
        <div className="search-box">

          <span className="search-icon">
            🔎
          </span>

          <input
            type="text"
            placeholder="Search doctors, clinics or services"
          />

        </div>

        {/* Welcome Card */}
        <div className="home-welcome">

          <div className="welcome-content">

            <span className="welcome-label">
              NEXGEN IVF
            </span>

            <h3>
              Your fertility journey,
              connected.
            </h3>

            <p>
              Trusted specialists and partner
              centres, all in one place.
            </p>

          </div>

          <div className="welcome-icon">
            ♡
          </div>

        </div>

        {/* Services */}
        <div className="section-heading">

          <h3>
            How can we help you today?
          </h3>

        </div>

        <div className="service-grid">

          <button
            className="service-card"
            onClick={() => onNavigate("specialists")}
          >

            <div className="service-icon teal">
              👩‍⚕️
            </div>

            <span>
              Find a
              <strong> Specialist</strong>
            </span>

          </button>

          <button
            className="service-card"
            onClick={() => onNavigate("centres")}
          >

            <div className="service-icon blue">
              🏥
            </div>

            <span>
              Find an
              <strong> IVF Centre</strong>
            </span>

          </button>

          <button
            className="service-card"
            onClick={() => onNavigate("booking")}
          >

            <div className="service-icon purple">
              📅
            </div>

            <span>
              Book
              <strong> Consultation</strong>
            </span>

          </button>

          <button
            className="service-card"
            onClick={() => onNavigate("second-opinion")}
          >

            <div className="service-icon pink">
              📋
            </div>

            <span>
              Get a
              <strong> Second Opinion</strong>
            </span>

          </button>

        </div>

        {/* Quick Access */}

        <div className="section-heading quick-heading">

          <h3>
            Quick access
          </h3>

          <button>
            View all
          </button>

        </div>

        <div className="quick-list">

          <button
            className="quick-item"
            onClick={() => onNavigate("appointments")}
          >

            <div className="quick-icon">
              📅
            </div>

            <div>
              <strong>
                My Appointments
              </strong>

              <span>
                View upcoming consultations
              </span>
            </div>

            <span className="arrow">
              →
            </span>

          </button>

          <button
            className="quick-item"
            onClick={() => onNavigate("documents")}
          >

            <div className="quick-icon">
              📄
            </div>

            <div>
              <strong>
                My Documents
              </strong>

              <span>
                Reports and consultation records
              </span>
            </div>

            <span className="arrow">
              →
            </span>

          </button>

          <button
            className="quick-item"
            onClick={() => onNavigate("journey")}
          >

            <div className="quick-icon">
              💗
            </div>

            <div>
              <strong>
                My Journey
              </strong>

              <span>
                Track your fertility journey
              </span>
            </div>

            <span className="arrow">
              →
            </span>

          </button>

        </div>

        {/* Trust Card */}

        <div className="trust-card">

          <div className="trust-icon">
            ✓
          </div>

          <div>

            <strong>
              Trusted & verified care
            </strong>

            <p>
              Doctors and partner centres are
              clearly identified on Nexgen IVF.
            </p>

          </div>

        </div>

        {/* Disclaimer */}

        <div className="home-disclaimer">

          Nexgen IVF is a technology and
          coordination platform. Medical advice
          and treatment decisions are provided
          by qualified healthcare professionals.

        </div>

        {/* Bottom Navigation */}

        <nav className="bottom-nav">

          <button
            className="nav-item active"
            onClick={() => onNavigate("home")}
          >
            <span>⌂</span>
            Home
          </button>

          <button
            className="nav-item"
            onClick={() => onNavigate("specialists")}
          >
            <span>♙</span>
            Specialists
          </button>

          <button
            className="nav-item"
            onClick={() => onNavigate("centres")}
          >
            <span>▣</span>
            Centres
          </button>

          <button
            className="nav-item"
            onClick={() => onNavigate("journey")}
          >
            <span>♡</span>
            Journey
          </button>

          <button
            className="nav-item"
            onClick={() => onNavigate("profile")}
          >
            <span>♙</span>
            Profile
          </button>

        </nav>

      </div>

    </div>
  );
}

export default Home;