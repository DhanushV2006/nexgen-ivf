import "../App.css";

function Journey({ booking, onNavigate }) {
  const doctor = booking?.doctor;

  return (
    <div className="app-background">

      <div className="mobile-app journey-screen">

        {/* Header */}

        <div className="journey-header">

          <div>
            <span className="journey-eyebrow">
              NEXGEN IVF
            </span>

            <h1>
              My Journey
            </h1>

            <p>
              Your fertility-care journey, organized
              in one place.
            </p>
          </div>

          <div className="journey-profile">
            P
          </div>

        </div>

        {/* Important Notice */}

        <div className="journey-notice">

          <div className="journey-notice-icon">
            ℹ️
          </div>

          <div>

            <strong>
              Your care, your decisions
            </strong>

            <p>
              Nexgen IVF helps coordinate your journey.
              Diagnosis and treatment decisions are made
              by your treating healthcare professional.
            </p>

          </div>

        </div>

        {/* Current Status */}

        <div className="journey-status-card">

          <div className="status-top">

            <div>
              <span>
                CURRENT STATUS
              </span>

              <h2>
                Consultation booked
              </h2>
            </div>

            <div className="status-check">
              ✓
            </div>

          </div>

          <div className="status-progress">

            <div className="status-progress-fill"></div>

          </div>

          <div className="status-footer">

            <span>
              Journey started
            </span>

            <strong>
              2 of 5 steps
            </strong>

          </div>

        </div>

        {/* Timeline */}

        <section className="journey-section">

          <div className="journey-section-title">

            <h3>
              Your timeline
            </h3>

            <span>
              2026
            </span>

          </div>

          <div className="journey-timeline">

            {/* Step 1 */}

            <div className="timeline-item completed">

              <div className="timeline-marker">
                ✓
              </div>

              <div className="timeline-content">

                <span className="timeline-date">
                  Profile created
                </span>

                <h4>
                  Welcome to Nexgen IVF
                </h4>

                <p>
                  Your patient profile has been created.
                </p>

              </div>

            </div>

            {/* Step 2 */}

            <div className="timeline-item completed">

              <div className="timeline-marker">
                ✓
              </div>

              <div className="timeline-content">

                <span className="timeline-date">
                  November 2026
                </span>

                <h4>
                  Consultation booked
                </h4>

                <p>
                  Your consultation with{" "}
                  {doctor?.name || "your specialist"}{" "}
                  has been scheduled.
                </p>

                <div className="timeline-detail">

                  <strong>
                    📅 November {booking?.date || "14"}, 2026
                  </strong>

                  <span>
                    🕐 {booking?.time || "12:00 PM"}
                  </span>

                </div>

              </div>

            </div>

            {/* Step 3 */}

            <div className="timeline-item current">

              <div className="timeline-marker">
                3
              </div>

              <div className="timeline-content">

                <span className="timeline-date">
                  Next step
                </span>

                <h4>
                  Specialist consultation
                </h4>

                <p>
                  Discuss your fertility concerns and
                  treatment options with your specialist.
                </p>

                <button
                  className="timeline-action"
                  onClick={() =>
                    onNavigate("appointments")
                  }
                >
                  View appointment →
                </button>

              </div>

            </div>

            {/* Step 4 */}

            <div className="timeline-item">

              <div className="timeline-marker">
                4
              </div>

              <div className="timeline-content">

                <span className="timeline-date">
                  Upcoming
                </span>

                <h4>
                  Reports & consultation information
                </h4>

                <p>
                  Documents and information shared by
                  your healthcare provider can be organized
                  here.
                </p>

              </div>

            </div>

            {/* Step 5 */}

            <div className="timeline-item last">

              <div className="timeline-marker">
                5
              </div>

              <div className="timeline-content">

                <span className="timeline-date">
                  Upcoming
                </span>

                <h4>
                  Follow-up
                </h4>

                <p>
                  Track future appointments and
                  follow-up information.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Quick Actions */}

        <section className="journey-section">

          <h3 className="journey-quick-title">
            Quick access
          </h3>

          <div className="journey-actions">

            <button
              onClick={() =>
                onNavigate("appointments")
              }
            >

              <div className="journey-action-icon">
                📅
              </div>

              <div>

                <strong>
                  My Appointments
                </strong>

                <span>
                  View scheduled consultations
                </span>

              </div>

              <b>
                →
              </b>

            </button>

            <button
              onClick={() =>
                onNavigate("documents")
              }
            >

              <div className="journey-action-icon document">
                📄
              </div>

              <div>

                <strong>
                  My Documents
                </strong>

                <span>
                  Reports and consultation documents
                </span>

              </div>

              <b>
                →
              </b>

            </button>

          </div>

        </section>

        {/* Bottom Navigation */}

        <div className="journey-bottom-nav">

          <button
            onClick={() =>
              onNavigate("home")
            }
          >
            <span>⌂</span>
            Home
          </button>

          <button
            onClick={() =>
              onNavigate("specialists")
            }
          >
            <span>♙</span>
            Specialists
          </button>

          <button
            onClick={() =>
              onNavigate("centres")
            }
          >
            <span>▣</span>
            Centres
          </button>

          <button className="active">
            <span>♡</span>
            Journey
          </button>

          <button
            onClick={() =>
              onNavigate("profile")
            }
          >
            <span>♙</span>
            Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Journey;