import "../App.css";

function DoctorProfile({ doctor, onNavigate }) {
  if (!doctor) {
    return (
      <div className="app-background">
        <div className="mobile-app">
          <button
            className="back-button"
            onClick={() => onNavigate("specialists")}
          >
            ←
          </button>

          <div className="empty-state">
            <div>👨‍⚕️</div>

            <h3>Doctor information unavailable</h3>

            <p>
              Please return to the specialists list.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-background">

      <div className="mobile-app doctor-profile-screen">

        {/* Header */}

        <div className="profile-page-header">

          <button
            className="back-button"
            onClick={() =>
              onNavigate("specialists")
            }
          >
            ←
          </button>

          <h2>Doctor Profile</h2>

          <button className="share-button">
            ↗
          </button>

        </div>

        {/* Doctor Profile Card */}

        <div className="profile-doctor-card">

          <div className="large-doctor-avatar">
            {doctor.name
              .replace("Dr. ", "")
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>

          <h1>
            {doctor.name}
          </h1>

          {doctor.verified && (
            <span className="profile-verified">
              ✓ Verified Specialist
            </span>
          )}

          <p className="profile-specialization">
            {doctor.specialization}
          </p>

          <div className="profile-rating">
            ⭐ {doctor.rating}
            <span>
              ({doctor.reviews} patient reviews)
            </span>
          </div>

        </div>

        {/* Quick Stats */}

        <div className="profile-stats">

          <div>
            <strong>
              {doctor.experience}
            </strong>

            <span>
              Experience
            </span>
          </div>

          <div>
            <strong>
              {doctor.location}
            </strong>

            <span>
              Location
            </span>
          </div>

          <div>
            <strong>
              {doctor.fee}
            </strong>

            <span>
              Consultation
            </span>
          </div>

        </div>

        {/* About */}

        <section className="profile-section">

          <h3>
            Qualifications
          </h3>

          <div className="qualification-box">
            🎓

            <span>
              {doctor.qualification}
            </span>
          </div>

        </section>

        {/* Specializations */}

        <section className="profile-section">

          <h3>
            Specializations
          </h3>

          <div className="specialization-tags">

            <span>IVF</span>
            <span>Fertility Care</span>
            <span>Reproductive Medicine</span>
          </div>

        </section>

        {/* Clinic */}

        <section className="profile-section">

          <h3>
            Clinic Affiliation
          </h3>

          <div className="clinic-profile-card">

            <div className="clinic-icon">
              🏥
            </div>

            <div>
              <strong>
                {doctor.clinic}
              </strong>

              <span>
                📍 {doctor.location}
              </span>

              <small>
                Partner centre
              </small>
            </div>

          </div>

        </section>

        {/* Languages */}

        <section className="profile-section">

          <h3>
            Languages
          </h3>

          <div className="language-list">

            {doctor.languages.map(
              (language) => (
                <span key={language}>
                  {language}
                </span>
              )
            )}

          </div>

        </section>

        {/* Consultation */}

        <section className="profile-section consultation-section">

          <h3>
            Consultation Options
          </h3>

          <div className="consultation-option">

            <div>
              <strong>
                Online Consultation
              </strong>

              <span>
                Video consultation
              </span>
            </div>

            <span className="option-price">
              {doctor.fee}
            </span>

          </div>

          <div className="consultation-option">

            <div>
              <strong>
                In-person Consultation
              </strong>

              <span>
                At {doctor.clinic}
              </span>
            </div>

            <span className="option-price">
              {doctor.fee}
            </span>

          </div>

        </section>

        {/* Reviews Notice */}

        <section className="review-notice">

          <div>
            ⭐
          </div>

          <div>
            <strong>
              Patient reviews
            </strong>

            <p>
              Reviews are shown separately from
              Nexgen IVF's verified doctor and
              clinic information.
            </p>
          </div>

        </section>

        {/* Bottom CTA */}

        <div className="profile-bottom-action">

          <div>

            <span>
              Consultation from
            </span>

            <strong>
              {doctor.fee}
            </strong>

          </div>

          <button
            className="primary-button profile-book-button"
            onClick={() =>
              onNavigate("booking", doctor)
            }
          >
            Book Consultation
          </button>

        </div>

      </div>

    </div>
  );
}

export default DoctorProfile;