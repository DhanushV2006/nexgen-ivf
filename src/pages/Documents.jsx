function Documents({ onNavigate }) {
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
            <h1>My Documents</h1>
          </div>
        </div>

        {/* -----------------------------
            INTRO
        ----------------------------- */}

        <div className="documents-intro">
          <p>
            Keep your consultation reports and
            fertility-related documents organised in
            one place.
          </p>

          <button
            className="primary-button"
            onClick={() =>
              alert("Demo: Secure document upload will be connected in the full product.")
            }
          >
            + Upload Document
          </button>
        </div>

        {/* -----------------------------
            DOCUMENT CATEGORIES
        ----------------------------- */}

        <div className="document-filter-row">
          <button className="active">All</button>
          <button>Reports</button>
          <button>Prescriptions</button>
          <button>Other</button>
        </div>

        {/* -----------------------------
            DOCUMENT LIST
        ----------------------------- */}

        <div className="documents-section">

          <p className="eyebrow">
            RECENT DOCUMENTS
          </p>

          <h2>
            Your files
          </h2>

          <div className="document-card">

            <div className="document-icon">
              PDF
            </div>

            <div className="document-info">
              <h3>Fertility Consultation Report</h3>

              <p>
                Uploaded 12 Sep 2026 · 2.4 MB
              </p>

              <span>Consultation Report</span>
            </div>

            <button
              className="document-action"
              onClick={() =>
                alert("Demo: Document preview")
              }
            >
              ⋮
            </button>

          </div>

          <div className="document-card">

            <div className="document-icon">
              PDF
            </div>

            <div className="document-info">
              <h3>Previous Medical Report</h3>

              <p>
                Uploaded 08 Sep 2026 · 1.8 MB
              </p>

              <span>Medical Report</span>
            </div>

            <button
              className="document-action"
              onClick={() =>
                alert("Demo: Document preview")
              }
            >
              ⋮
            </button>

          </div>

          <div className="document-card">

            <div className="document-icon">
              PDF
            </div>

            <div className="document-info">
              <h3>Prescription Summary</h3>

              <p>
                Uploaded 03 Sep 2026 · 860 KB
              </p>

              <span>Prescription</span>
            </div>

            <button
              className="document-action"
              onClick={() =>
                alert("Demo: Document preview")
              }
            >
              ⋮
            </button>

          </div>

        </div>

        {/* -----------------------------
            PRIVACY NOTICE
        ----------------------------- */}

        <div className="document-privacy">

          <div className="privacy-icon">
            🔒
          </div>

          <div>
            <strong>
              Privacy & consent
            </strong>

            <p>
              Documents are intended to be shared only
              with healthcare professionals you choose.
              Secure document handling is a product
              requirement for the full platform.
            </p>
          </div>

        </div>

        {/* -----------------------------
            DISCLAIMER
        ----------------------------- */}

        <div className="healthcare-disclaimer">

          <strong>
            Important
          </strong>

          <p>
            This prototype uses fictional sample
            documents. No real medical records are
            uploaded or stored.
          </p>

        </div>

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

          <button onClick={() => onNavigate("profile")}>
            <span>●</span>
            <small>Profile</small>
          </button>

        </div>

      </div>
    </div>
  );
}

export default Documents;