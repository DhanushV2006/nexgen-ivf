import "../App.css";

function DoctorPortal({ onNavigate }) {
  const appointments = [
    { name: "Priya Sharma", time: "10:00 AM", type: "Online", status: "Confirmed" },
    { name: "Ananya Rao", time: "11:30 AM", type: "In-person", status: "Confirmed" },
    { name: "Rahul Nair", time: "2:00 PM", type: "Online", status: "Pending" },
  ];

  return (
    <div className="app-background">
      <div className="mobile-app portal-page">
        <header className="portal-header">
          <div>
            <span className="portal-eyebrow">NEXGEN DOCTOR PORTAL</span>
            <h1>Good morning, Dr. Aishwarya</h1>
            <p>Manage consultations, patients and your availability.</p>
          </div>
          <div className="portal-avatar">AR</div>
        </header>

        <div className="verification-banner">
          <span>✓</span>
          <div>
            <strong>Nexgen Verification</strong>
            <small>Demo status: Verified</small>
          </div>
        </div>

        <section className="portal-section">
          <h2>Today's overview</h2>
          <div className="metric-grid">
            <div className="metric-card"><strong>4</strong><span>Consultations</span></div>
            <div className="metric-card"><strong>3</strong><span>New Requests</span></div>
            <div className="metric-card"><strong>5</strong><span>Follow-ups</span></div>
            <div className="metric-card"><strong>2</strong><span>Documents</span></div>
          </div>
        </section>

        <section className="portal-section">
          <div className="section-heading">
            <h2>Today's appointments</h2>
            <button onClick={() => alert("Demo: full appointment list.")}>View all</button>
          </div>

          <div className="portal-list">
            {appointments.map((item) => (
              <div className="portal-list-card" key={item.name}>
                <div className="patient-avatar">{item.name.charAt(0)}</div>
                <div className="list-main">
                  <strong>{item.name}</strong>
                  <span>{item.time} · {item.type}</span>
                </div>
                <span className={`status-pill ${item.status === "Pending" ? "pending" : "confirmed"}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="portal-section">
          <h2>Quick actions</h2>
          <div className="portal-action-grid">
            <button onClick={() => alert("Demo: availability management.")}>Availability</button>
            <button onClick={() => alert("Demo: authorized patient records.")}>Patients</button>
            <button onClick={() => alert("Demo: shared documents.")}>Documents</button>
            <button onClick={() => alert("Demo: follow-up queue.")}>Follow-ups</button>
          </div>
        </section>

        <section className="privacy-card">
          <strong>Privacy & access control</strong>
          <p>Doctors only access patient information that has been appropriately shared or authorized for their care workflow.</p>
        </section>

        <nav className="portal-bottom-nav">
          <button className="active">Dashboard</button>
          <button onClick={() => alert("Demo: appointments.")}>Appointments</button>
          <button onClick={() => alert("Demo: patients.")}>Patients</button>
          <button onClick={() => alert("Demo: profile.")}>Profile</button>
        </nav>

        <button className="secondary-portal-button" onClick={() => onNavigate("home")}>
          Return to Patient App
        </button>
      </div>
    </div>
  );
}

export default DoctorPortal;
