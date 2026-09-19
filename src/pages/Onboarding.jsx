import "../App.css";

function Onboarding({ onNavigate }) {
  return (
    <div className="app-background">
      <div className="mobile-app onboarding-screen">

        <div className="onboarding-top">
          <button
            className="text-button"
            onClick={() => onNavigate("login")}
          >
            Skip
          </button>
        </div>

        <div className="onboarding-illustration">
          <div className="onboarding-circle">
            <span>♡</span>
          </div>
        </div>

        <div className="onboarding-content">

          <div className="onboarding-step">
            <span className="active-dot"></span>
            <span></span>
            <span></span>
          </div>

          <h1>
            Care that connects<br />
            <span>your fertility journey</span>
          </h1>

          <p>
            Discover fertility specialists, partner IVF centres,
            consultations and care coordination — all in one place.
          </p>

          <div className="onboarding-features">

            <div className="onboarding-feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Verified specialists</strong>
                <small>Connect with registered professionals</small>
              </div>
            </div>

            <div className="onboarding-feature">
              <div className="feature-icon">⌖</div>
              <div>
                <strong>Partner IVF centres</strong>
                <small>Explore centres connected to the platform</small>
              </div>
            </div>

            <div className="onboarding-feature">
              <div className="feature-icon">♡</div>
              <div>
                <strong>Organised care journey</strong>
                <small>Keep appointments and documents together</small>
              </div>
            </div>

          </div>

          <button
            className="primary-button"
            onClick={() => onNavigate("login")}
          >
            Continue
          </button>

          <div className="platform-disclaimer">
            Nexgen IVF is a technology and care-coordination platform.
            Medical advice and treatment decisions are provided by
            qualified healthcare professionals.
          </div>

        </div>

      </div>
    </div>
  );
}

export default Onboarding;