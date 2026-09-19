import "../App.css";

function Splash({ onNavigate }) {
  return (
    <div className="app-background">
      <div className="mobile-app splash-screen">
        <div className="splash-content">

          <div className="splash-logo">
            <div className="splash-logo-mark">N</div>
          </div>

          <h1>Nexgen IVF</h1>

          <p>Your fertility journey, connected.</p>

          <div className="splash-trust">
            <span>✓</span>
            <span>Specialists</span>

            <span>✓</span>
            <span>Partner Centres</span>
          </div>

          <button
            className="primary-button splash-button"
            onClick={() => onNavigate("onboarding")}
          >
            Get Started
          </button>

          <small>
            A fertility-care coordination platform
          </small>

        </div>
      </div>
    </div>
  );
}

export default Splash;