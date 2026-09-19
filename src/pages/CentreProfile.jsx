function CentreProfile({ centre, onNavigate }) {
  if (!centre) {
    return (
      <div className="app-container">

        <div className="page-header">

          <button
            className="back-button"
            onClick={() => onNavigate("centres")}
          >
            ←
          </button>

          <div>
            <p className="eyebrow">
              NEXGEN IVF
            </p>

            <h1>Centre Profile</h1>
          </div>

        </div>

        <div className="empty-state">

          <h3>Centre not found</h3>

          <p>
            Please select a centre again.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="app-container">

      {/* -----------------------------
          HEADER
      ----------------------------- */}

      <div className="page-header">

        <button
          className="back-button"
          onClick={() => onNavigate("centres")}
        >
          ←
        </button>

        <div>
          <p className="eyebrow">
            NEXGEN IVF
          </p>

          <h1>Centre Profile</h1>
        </div>

      </div>

      {/* -----------------------------
          CENTRE HERO
      ----------------------------- */}

      <div className="centre-profile-hero">

        <div className="centre-profile-avatar">
          {centre.name
            .split(" ")
            .slice(0, 2)
            .map((word) => word[0])
            .join("")}
        </div>

        <h2>{centre.name}</h2>

        {centre.verified && (
          <span className="verified-badge">
            ✓ Verified Partner
          </span>
        )}

        <p>
          📍 {centre.location} · {centre.distance}
        </p>

      </div>

      {/* -----------------------------
          SERVICES
      ----------------------------- */}

      <section className="profile-section">

        <p className="eyebrow">
          SERVICES
        </p>

        <h2>
          Care & services
        </h2>

        <div className="centre-services profile-services">

          {centre.services.map((service) => (
            <span key={service}>
              {service}
            </span>
          ))}

        </div>

      </section>

      {/* -----------------------------
          DOCTORS
      ----------------------------- */}

      <section className="profile-section">

        <p className="eyebrow">
          SPECIALISTS
        </p>

        <h2>
          Doctors at this centre
        </h2>

        <div className="centre-doctor-list">

          {centre.doctors.map((doctor) => (

            <div
              className="centre-doctor-item"
              key={doctor}
            >

              <div className="mini-doctor-avatar">
                {doctor
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div>

                <strong>
                  {doctor}
                </strong>

                <p>
                  Verified partner specialist
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* -----------------------------
          FACILITIES
      ----------------------------- */}

      <section className="profile-section">

        <p className="eyebrow">
          FACILITIES
        </p>

        <h2>
          Available facilities
        </h2>

        <div className="facility-grid">

          {centre.facilities.map((facility) => (

            <div
              className="facility-card"
              key={facility}
            >

              <span>✓</span>

              <p>
                {facility}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* -----------------------------
          CONSULTATION
      ----------------------------- */}

      <section className="consultation-card">

        <p className="eyebrow">
          CONSULTATION
        </p>

        <h3>
          Book a consultation
        </h3>

        <p>
          Connect with an available specialist
          through Nexgen IVF.
        </p>

        <button
          className="primary-button full-width-button"
          onClick={() =>
            onNavigate("booking", {
              id: `centre-${centre.id}`,

              name: centre.doctors[0],

              qualification:
                "MBBS, Fellowship in Reproductive Medicine",

              specialization:
                "Fertility & Reproductive Medicine",

              experience:
                "Experienced Partner Specialist",

              clinic: centre.name,

              location: centre.location,

              fee: "₹1,500",

              rating: "4.8",

              reviews: 100,

              languages: ["English"],

              verified: true,

              available: [
                "10:00 AM",
                "12:00 PM",
                "3:00 PM",
              ],
            })
          }
        >
          Book Consultation
        </button>

      </section>

      {/* -----------------------------
          COST
      ----------------------------- */}

      <section className="price-information">

        <p className="eyebrow">
          COST INFORMATION
        </p>

        <strong>
          {centre.costRange}
        </strong>

        <p>
          *Illustrative prototype range.
          Actual costs may vary based on the
          centre, treatment plan and clinical
          requirements.
        </p>

      </section>

      {/* -----------------------------
          DISCLAIMER
      ----------------------------- */}

      <div className="healthcare-disclaimer">

        <strong>
          Important
        </strong>

        <p>
          Nexgen IVF is a technology and
          care-coordination platform. Medical
          services are provided by registered
          healthcare professionals at partner
          centres.
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
          onClick={() =>
            onNavigate("specialists")
          }
        >
          <span>♙</span>
          <small>Specialists</small>
        </button>

        <button
          className="active"
          onClick={() =>
            onNavigate("centres")
          }
        >
          <span>▣</span>
          <small>Centres</small>
        </button>

        <button
          onClick={() =>
            onNavigate("journey")
          }
        >
          <span>◉</span>
          <small>Journey</small>
        </button>

        <button
          onClick={() =>
            onNavigate("profile")
          }
        >
          <span>●</span>
          <small>Profile</small>
        </button>

      </div>

    </div>
  );
}

export default CentreProfile;