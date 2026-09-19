import { useState } from "react";
import doctors from "../data/doctors";
import "../App.css";

function Specialists({ onNavigate }) {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialization} ${doctor.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app-background">

      <div className="mobile-app specialists-screen">

        {/* Header */}

        <div className="page-header">

          <button
            className="back-button"
            onClick={() => onNavigate("home")}
          >
            ←
          </button>

          <div>
            <h2>Fertility Specialists</h2>
            <span>
              Verified specialists for your care
            </span>
          </div>

        </div>

        {/* Search */}

        <div className="specialist-search">

          <span>🔎</span>

          <input
            type="text"
            placeholder="Search specialists"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Filters */}

        <div className="filter-row">

          <button>
            📍 Location
          </button>

          <button>
            ⭐ Experience
          </button>

          <button>
            ⚙ Filter
          </button>

        </div>

        {/* Results */}

        <div className="results-header">

          <strong>
            {filteredDoctors.length} specialists
          </strong>

          <span>
            Available options
          </span>

        </div>

        {/* Doctor Cards */}

        <div className="doctor-list">

          {filteredDoctors.map((doctor) => (

            <div
              className="doctor-card"
              key={doctor.id}
            >

              {/* Doctor top */}

              <div className="doctor-top">

                <div className="doctor-avatar">
                  {doctor.name
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div className="doctor-info">

                  <div className="doctor-name-row">

                    <h3>
                      {doctor.name}
                    </h3>

                    {doctor.verified && (
                      <span className="verified-badge">
                        ✓ Verified
                      </span>
                    )}

                  </div>

                  <p className="qualification">
                    {doctor.qualification}
                  </p>

                  <p className="specialization">
                    {doctor.specialization}
                  </p>

                </div>

              </div>

              {/* Doctor details */}

              <div className="doctor-details">

                <span>
                  ⭐ {doctor.rating}
                  {" "}
                  ({doctor.reviews})
                </span>

                <span>
                  🕐 {doctor.experience}
                </span>

                <span>
                  📍 {doctor.location}
                </span>

              </div>

              {/* Clinic */}

              <div className="clinic-line">

                <span>Clinic</span>

                <strong>
                  {doctor.clinic}
                </strong>

              </div>

              {/* Fee */}

              <div className="doctor-bottom">

                <div>
                  <span className="fee-label">
                    Consultation
                  </span>

                  <strong className="doctor-fee">
                    {doctor.fee}
                  </strong>
                </div>

                <div className="available-slots">

                  <span>
                    Available
                  </span>

                  <div>
                    {doctor.available
                      .slice(0, 2)
                      .map((time) => (
                        <small key={time}>
                          {time}
                        </small>
                      ))}
                  </div>

                </div>

              </div>

              {/* Actions */}

              <div className="doctor-actions">

                <button
                  className="outline-button"
                  onClick={() =>
                    onNavigate(
                      "doctor-profile",
                      doctor
                    )
                  }
                >
                  View Profile
                </button>

                <button
                  className="card-book-button"
                  onClick={() =>
                    onNavigate(
                      "booking",
                      doctor
                    )
                  }
                >
                  Book Consultation
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Empty State */}

        {filteredDoctors.length === 0 && (

          <div className="empty-state">

            <div>🔎</div>

            <h3>
              No specialists found
            </h3>

            <p>
              Try another name, location or
              specialization.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Specialists;