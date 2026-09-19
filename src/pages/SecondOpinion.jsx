function SecondOpinion({ onNavigate }) {
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
            <h1>Second Opinion</h1>
          </div>
        </div>

        {/* -----------------------------
            INTRO CARD
        ----------------------------- */}

        <div className="second-opinion-hero">
          <div className="second-opinion-icon">
            ⚕
          </div>

          <h2>Get another professional perspective</h2>

          <p>
            Share your existing medical documents with a
            verified fertility specialist for an independent
            professional review.
          </p>
        </div>

        {/* -----------------------------
            HOW IT WORKS
        ----------------------------- */}

        <div className="second-opinion-section">

          <p className="eyebrow">
            HOW IT WORKS
          </p>

          <h2>Simple 3-step process</h2>

          <div className="opinion-steps">

            <div className="opinion-step">
              <div className="opinion-step-number">
                1
              </div>

              <div>
                <h3>Upload documents</h3>
                <p>
                  Share relevant reports or consultation
                  documents securely.
                </p>
              </div>
            </div>

            <div className="opinion-step">
              <div className="opinion-step-number">
                2
              </div>

              <div>
                <h3>Choose a specialist</h3>
                <p>
                  Select a verified fertility specialist
                  based on your preferences.
                </p>
              </div>
            </div>

            <div className="opinion-step">
              <div className="opinion-step-number">
                3
              </div>

              <div>
                <h3>Receive a consultation</h3>
                <p>
                  Discuss your existing information with
                  the selected healthcare professional.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* -----------------------------
            DOCUMENT CARD
        ----------------------------- */}

        <div className="opinion-upload-card">

          <div className="upload-icon">
            ↑
          </div>

          <div>
            <h3>Upload medical documents</h3>

            <p>
              Reports, prescriptions or consultation
              summaries
            </p>
          </div>

          <button
            className="secondary-button"
            onClick={() =>
              alert("Demo: Document upload will be connected in the full product.")
            }
          >
            Upload
          </button>

        </div>

        {/* -----------------------------
            SPECIALIST CARD
        ----------------------------- */}

        <div className="opinion-specialist-card">

          <div className="opinion-specialist-avatar">
            AR
          </div>

          <div className="opinion-specialist-info">
            <span className="eyebrow">
              RECOMMENDED SPECIALIST
            </span>

            <h3>
              Dr. Aishwarya Rao
            </h3>

            <p>
              Fertility & IVF Specialist
            </p>

            <span className="verified-badge">
              ✓ Verified
            </span>
          </div>

        </div>

        {/* -----------------------------
            ACTION
        ----------------------------- */}

        <button
          className="primary-button full-width-button"
          onClick={() => onNavigate("specialists")}
        >
          Choose a Specialist
        </button>

        {/* -----------------------------
            SAFETY NOTICE
        ----------------------------- */}

        <div className="second-opinion-notice">

          <strong>
            Medical information
          </strong>

          <p>
            A second opinion is provided by a qualified
            healthcare professional. Nexgen IVF does not
            independently diagnose conditions or prescribe
            treatment.
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

export default SecondOpinion;