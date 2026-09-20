import "../App.css";

function AdminDashboard({ onNavigate }) {
  const metrics = [
    ["12,450", "Patients"],
    ["820", "Doctors"],
    ["145", "Partner Clinics"],
    ["3,280", "Appointments"],
    ["86", "New Enquiries"],
    ["24", "Pending Verifications"],
  ];

  const verificationItems = [
    ["Dr. Meera Iyer", "Doctor credential application", "Under Review"],
    ["Bloom Fertility Centre", "Clinic verification", "Needs Update"],
    ["Dr. Rohan Sharma", "Professional credentials", "Documents Received"],
  ];

  const management = [
    "Patients", "Doctors", "Clinics", "Appointments",
    "Support", "Analytics", "Payments", "Content", "Settings"
  ];

  return (
    <div className="app-background">
      <div className="mobile-app portal-page">
        <header className="portal-header">
          <div>
            <span className="portal-eyebrow">NEXGEN ADMIN</span>
            <h1>Platform Overview</h1>
            <p>Internal administration and verification workspace.</p>
          </div>
          <div className="portal-avatar">NA</div>
        </header>

        <div className="demo-admin-banner">
          <strong>Demo Administration Environment</strong>
          <span>All metrics and records shown here are fictional prototype data.</span>
        </div>

        <section className="portal-section">
          <h2>Platform metrics</h2>
          <div className="metric-grid admin-metrics">
            {metrics.map(([value, label]) => (
              <div className="metric-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="portal-section">
          <div className="section-heading">
            <h2>Verification centre</h2>
            <button onClick={() => alert("Demo: open verification queue.")}>View all</button>
          </div>

          <div className="verification-flow admin-flow">
            <div className="flow-step done">Application submitted</div>
            <div className="flow-step done">Documents received</div>
            <div className="flow-step current">Under review</div>
            <div className="flow-step">Verified</div>
            <div className="flow-step">Needs update</div>
            <div className="flow-step">Rejected</div>
          </div>

          <div className="portal-list">
            {verificationItems.map(([name, detail, status]) => (
              <div className="portal-list-card" key={name}>
                <div className="patient-avatar">{name.charAt(0)}</div>
                <div className="list-main">
                  <strong>{name}</strong>
                  <span>{detail}</span>
                </div>
                <span className="status-pill pending">{status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="portal-section">
          <h2>Management</h2>
          <div className="portal-action-grid">
            {management.map((item) => (
              <button key={item} onClick={() => alert(`Demo: ${item} management.`)}>
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="audit-card">
          <strong>Audit-log concept</strong>
          <div><span>09:42</span> Verification status updated — Demo Admin</div>
          <div><span>09:18</span> Clinic application reviewed — Demo Admin</div>
          <div><span>08:55</span> Support request assigned — Demo Admin</div>
        </section>

        <section className="privacy-card">
          <strong>Access control</strong>
          <p>Production administration would use role-based permissions, consent controls, secure authentication and auditable access to sensitive information.</p>
        </section>

        <button className="secondary-portal-button" onClick={() => onNavigate("home")}>
          Return to Patient App
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
