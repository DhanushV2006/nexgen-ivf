import "../App.css";

function HowNexgenWorks({ onNavigate }) {
  const steps = [
    ["01", "Patient discovers", "Search specialists or partner IVF centres."],
    ["02", "Verified information", "Review professional, clinic and service information."],
    ["03", "Consultation request", "Choose a consultation option and request an appointment."],
    ["04", "Partner receives request", "The appropriate doctor or clinic receives the request."],
    ["05", "Appointment confirmed", "The patient receives appointment details."],
    ["06", "Journey continues", "Appointments, documents and follow-ups stay organised."],
  ];

  return (
    <div className="app-background">
      <div className="mobile-app portal-page">
        <button className="back-link" onClick={() => onNavigate("home")}>← Back to Home</button>
        <span className="portal-eyebrow">HOW NEXGEN WORKS</span>
        <h1 className="feature-page-title">One connected fertility-care journey</h1>
        <p className="feature-page-subtitle">
          Nexgen coordinates discovery and care workflows while medical services remain with qualified partner professionals and facilities.
        </p>

        <div className="ecosystem-flow">
          {steps.map(([number, title, description]) => (
            <div className="ecosystem-step" key={number}>
              <div className="ecosystem-number">{number}</div>
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="privacy-card">
          <strong>Platform role</strong>
          <p>Nexgen does not independently diagnose, prescribe medicines, perform IVF procedures or operate as an IVF clinic.</p>
        </div>
      </div>
    </div>
  );
}

export default HowNexgenWorks;
