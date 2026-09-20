import "../App.css";

function PartnerClinic({ onNavigate }) {
  const doctors = [
    { name: "Dr. Aishwarya Rao", specialty: "Fertility & IVF Specialist", status: "Active" },
    { name: "Dr. Kunal Mehta", specialty: "Reproductive Medicine", status: "Active" },
    { name: "Dr. Meera Iyer", specialty: "Fertility Specialist", status: "Invite pending" },
  ];

  return (
    <div className="app-background">
      <div className="mobile-app portal-page">
        <header className="portal-header">
          <div>
            <span className="portal-eyebrow">NEXGEN CLINIC PARTNER</span>
            <h1>Hope Fertility Centre</h1>
            <p>Clinic administration and partner operations.</p>
          </div>
          <div className="portal-avatar">HF</div>
        </header>

        <div className="verification-banner">
          <span>!</span>
          <div>
            <strong>Clinic Verification</strong>
            <small>Demo status: Under Review</small>
          </div>
        </div>

        <section className="portal-section">
          <h2>Today's overview</h2>
          <div className="metric-grid">
            <div className="metric-card"><strong>12</strong><span>Appointments</span></div>
            <div className="metric-card"><strong>7</strong><span>New Enquiries</span></div>
            <div className="metric-card"><strong>6</strong><span>Active Doctors</span></div>
            <div className="metric-card"><strong>84</strong><span>Monthly Bookings</span></div>
          </div>
        </section>

        <section className="portal-section">
          <div className="section-heading">
            <h2>Doctor management</h2>
            <button onClick={() => alert("Demo: invite doctor.")}>+ Add</button>
          </div>

          <div className="portal-list">
            {doctors.map((doctor) => (
              <div className="portal-list-card" key={doctor.name}>
                <div className="patient-avatar">{doctor.name.split(" ")[1]?.charAt(0) || "D"}</div>
                <div className="list-main">
                  <strong>{doctor.name}</strong>
                  <span>{doctor.specialty}</span>
                </div>
                <span className="status-pill confirmed">{doctor.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="portal-section">
          <h2>Patient enquiries</h2>
          <div className="enquiry-card">
            <strong>Consultation requested</strong>
            <span>New enquiry · Online consultation</span>
            <button onClick={() => alert("Demo: enquiry management.")}>Manage enquiry</button>
          </div>
          <div className="enquiry-card">
            <strong>Appointment booked</strong>
            <span>Follow-up requested by patient</span>
            <button onClick={() => alert("Demo: appointment details.")}>View</button>
          </div>
        </section>

        <section className="portal-section">
          <h2>Clinic verification</h2>
          <div className="verification-flow">
            <div className="flow-step done">Application submitted</div>
            <div className="flow-step done">Documents received</div>
            <div className="flow-step current">Under review</div>
            <div className="flow-step">Verified / Needs update</div>
          </div>
          <p className="demo-note">Verification information is fictional demo data and does not represent a completed real-world verification.</p>
        </section>

        <section className="portal-section">
          <h2>Clinic tools</h2>
          <div className="portal-action-grid">
            <button onClick={() => alert("Demo: clinic profile.")}>Clinic Profile</button>
            <button onClick={() => alert("Demo: services.")}>Services</button>
            <button onClick={() => alert("Demo: availability.")}>Availability</button>
            <button onClick={() => alert("Demo: analytics.")}>Analytics</button>
            <button onClick={() => alert("Demo: billing.")}>Billing</button>
            <button onClick={() => alert("Demo: settings.")}>Settings</button>
          </div>
        </section>

        <section className="privacy-card">
          <strong>Organization access</strong>
          <p>Clinic administrators manage clinic operations. Access to sensitive patient information is restricted to authorized workflows and permissions.</p>
        </section>

        <button className="secondary-portal-button" onClick={() => onNavigate("home")}>
          Return to Patient App
        </button>
      </div>
    </div>
  );
}

export default PartnerClinic;
