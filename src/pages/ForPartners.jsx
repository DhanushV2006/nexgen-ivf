import "../App.css";

function ForPartners({ onNavigate }) {
  const features = [
    ["Patient discovery", "Build a digital presence where patients can discover your practice."],
    ["Appointment management", "Coordinate consultation requests and schedules."],
    ["Doctor availability", "Manage consultation slots and availability."],
    ["Clinic profile", "Present services, facilities and professional information."],
    ["Patient enquiries", "Organise enquiries and follow-up workflows."],
    ["Analytics", "Review demo operational and booking insights."],
  ];

  return (
    <div className="app-background">
      <div className="mobile-app portal-page">
        <button className="back-link" onClick={() => onNavigate("home")}>← Back to Home</button>

        <div className="partner-hero">
          <span className="portal-eyebrow">FOR CLINICS & DOCTORS</span>
          <h1>Grow your fertility practice with Nexgen.</h1>
          <p>Connect with patients, manage consultations and build your digital fertility presence.</p>
          <div className="partner-actions">
            <button className="primary-button" onClick={() => alert("Demo partner application.")}>
              Become a Partner
            </button>
            <button className="secondary-portal-button" onClick={() => onNavigate("partner-clinic")}>
              Partner Login
            </button>
          </div>
        </div>

        <section className="portal-section">
          <h2>Partner tools</h2>
          <div className="partner-feature-list">
            {features.map(([title, description]) => (
              <div className="partner-feature" key={title}>
                <div className="feature-check">✓</div>
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="coming-soon-card">
          <span>COMING SOON</span>
          <h2>Future platform modules</h2>
          <p>
            Potential future modules may include clinic SaaS tools, patient acquisition services,
            premium coordination, second-opinion coordination, diagnostic partnerships and legally
            permitted financing/insurance partnerships.
          </p>
        </section>

        <div className="demo-note">
          Future modules are concepts only and are not presented as currently available services.
        </div>
      </div>
    </div>
  );
}

export default ForPartners;
