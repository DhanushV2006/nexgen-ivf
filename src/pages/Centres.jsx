import { useState } from "react";
import centres from "../data/centres";

function Centres({ onNavigate }) {
  const [search, setSearch] = useState("");

  const filteredCentres = centres.filter((centre) => {
    const searchText = `
      ${centre.name}
      ${centre.location}
      ${centre.services.join(" ")}
    `.toLowerCase();

    return searchText.includes(search.toLowerCase());
  });

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
          <h1>Find an IVF Centre</h1>
        </div>
      </div>

      {/* -----------------------------
          INTRO
      ----------------------------- */}

      <div className="centre-intro">
        <h2>Find the right care centre</h2>

        <p>
          Explore verified partner centres and compare available
          fertility services in one place.
        </p>
      </div>

      {/* -----------------------------
          SEARCH
      ----------------------------- */}

      <div className="search-box">
        <span>⌕</span>

        <input
          type="text"
          placeholder="Search by centre, city or service"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* -----------------------------
          FILTERS
      ----------------------------- */}

      <div className="filter-row">
        <button>📍 Location</button>
        <button>⚕️ Services</button>
        <button>☰ Filters</button>
      </div>

      {/* -----------------------------
          RESULTS HEADER
      ----------------------------- */}

      <div className="section-heading">
        <div>
          <p className="eyebrow">PARTNER NETWORK</p>
          <h2>{filteredCentres.length} centres available</h2>
        </div>
      </div>

      {/* -----------------------------
          CENTRE LIST
      ----------------------------- */}

      <div className="centre-list">

        {filteredCentres.length > 0 ? (

          filteredCentres.map((centre) => (

            <div
              className="centre-card"
              key={centre.id}
            >

              {/* Centre Header */}

              <div className="centre-card-top">

                <div className="centre-avatar">
                  {centre.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div className="centre-main-info">

                  <div className="centre-title-row">

                    <h3>{centre.name}</h3>

                    {centre.verified && (
                      <span className="verified-badge">
                        ✓ Verified
                      </span>
                    )}

                  </div>

                  <p className="centre-location">
                    📍 {centre.location} · {centre.distance}
                  </p>

                  <span className="partner-badge">
                    {centre.partnerStatus}
                  </span>

                </div>

              </div>

              {/* Services */}

              <div className="centre-services">

                {centre.services.slice(0, 3).map((service) => (
                  <span key={service}>
                    {service}
                  </span>
                ))}

              </div>

              {/* Specialists */}

              <div className="centre-detail">

                <span>👨‍⚕️</span>

                <div>
                  <small>Specialists</small>

                  <p>
                    {centre.doctors.join(" · ")}
                  </p>
                </div>

              </div>

              {/* Consultation */}

              <div className="centre-detail">

                <span>🗓️</span>

                <div>
                  <small>Consultation</small>

                  <p>
                    {centre.consultationAvailable
                      ? "Consultations available"
                      : "Currently unavailable"}
                  </p>
                </div>

              </div>

              {/* Bottom */}

              <div className="centre-card-bottom">

                <div>
                  <small>
                    Illustrative treatment range
                  </small>

                  <strong>
                    {centre.costRange}
                  </strong>
                </div>

                <button
                  className="primary-button"
                  onClick={() =>
                    onNavigate(
                      "centre-profile",
                      centre
                    )
                  }
                >
                  View Centre
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="empty-state">

            <div className="empty-icon">
              ⌕
            </div>

            <h3>No centres found</h3>

            <p>
              Try searching with another city,
              centre name or service.
            </p>

          </div>

        )}

      </div>

      {/* -----------------------------
          DISCLAIMER
      ----------------------------- */}

      <div className="healthcare-disclaimer">

        <strong>Important</strong>

        <p>
          Nexgen IVF is a technology and
          care-coordination platform. Medical
          services are provided by registered
          healthcare professionals at partner
          centres. Information shown here is
          for prototype demonstration only.
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

        <button
          onClick={() => onNavigate("specialists")}
        >
          <span>♙</span>
          <small>Specialists</small>
        </button>

        <button className="active">
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

export default Centres;