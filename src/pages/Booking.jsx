import { useState } from "react";
import "../App.css";

function Booking({ doctor, onNavigate }) {
  const [selectedDate, setSelectedDate] = useState("14");
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("Online");

  const dates = [
    { day: "Thu", date: "14" },
    { day: "Fri", date: "15" },
    { day: "Sat", date: "16" },
    { day: "Sun", date: "17" },
    { day: "Mon", date: "18" },
  ];

  const times = doctor?.available || [
    "10:00 AM",
    "12:00 PM",
    "3:00 PM",
  ];

  const continueBooking = () => {
    if (!selectedTime) {
      alert("Please select an appointment time.");
      return;
    }

    onNavigate("booking-review", {
      doctor,
      date: selectedDate,
      time: selectedTime,
      consultationType,
    });
  };

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
            <div>📅</div>

            <h3>Booking information unavailable</h3>

            <p>
              Please select a specialist before booking.
            </p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="app-background">

      <div className="mobile-app booking-screen">

        {/* Header */}

        <div className="booking-header">

          <button
            className="back-button"
            onClick={() =>
              onNavigate("doctor-profile")
            }
          >
            ←
          </button>

          <div>
            <h2>Book Consultation</h2>
            <span>Choose a convenient appointment</span>
          </div>

        </div>

        {/* Progress */}

        <div className="booking-progress">

          <div className="progress-step active">
            <span>1</span>
            Date & Time
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>2</span>
            Details
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>3</span>
            Confirm
          </div>

        </div>

        {/* Doctor */}

        <div className="booking-doctor">

          <div className="booking-doctor-avatar">
            {doctor.name
              .replace("Dr. ", "")
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div>
            <strong>{doctor.name}</strong>

            <span>
              {doctor.specialization}
            </span>

            <small>
              ✓ Verified specialist
            </small>
          </div>

        </div>

        {/* Date */}

        <section className="booking-section">

          <div className="booking-section-title">
            <h3>Select date</h3>

            <span>November 2026</span>
          </div>

          <div className="date-list">

            {dates.map((item) => (

              <button
                key={item.date}
                className={
                  selectedDate === item.date
                    ? "date-card selected"
                    : "date-card"
                }
                onClick={() =>
                  setSelectedDate(item.date)
                }
              >
                <span>{item.day}</span>

                <strong>{item.date}</strong>

              </button>

            ))}

          </div>

        </section>

        {/* Time */}

        <section className="booking-section">

          <div className="booking-section-title">

            <h3>Select time</h3>

            <span>Available slots</span>

          </div>

          <div className="time-grid">

            {times.map((time) => (

              <button
                key={time}
                className={
                  selectedTime === time
                    ? "time-slot selected"
                    : "time-slot"
                }
                onClick={() =>
                  setSelectedTime(time)
                }
              >
                {time}
              </button>

            ))}

          </div>

        </section>

        {/* Consultation Type */}

        <section className="booking-section">

          <div className="booking-section-title">

            <h3>Consultation type</h3>

          </div>

          <div className="consultation-type-list">

            <button
              className={
                consultationType === "Online"
                  ? "type-card selected"
                  : "type-card"
              }
              onClick={() =>
                setConsultationType("Online")
              }
            >

              <div className="type-icon">
                💻
              </div>

              <div>
                <strong>Online Consultation</strong>

                <span>
                  Video consultation from anywhere
                </span>
              </div>

              <div className="radio">
                {consultationType === "Online"
                  ? "●"
                  : "○"}
              </div>

            </button>

            <button
              className={
                consultationType === "In-person"
                  ? "type-card selected"
                  : "type-card"
              }
              onClick={() =>
                setConsultationType("In-person")
              }
            >

              <div className="type-icon clinic">
                🏥
              </div>

              <div>
                <strong>In-person Consultation</strong>

                <span>
                  Visit {doctor.clinic}
                </span>
              </div>

              <div className="radio">
                {consultationType === "In-person"
                  ? "●"
                  : "○"}
              </div>

            </button>

          </div>

        </section>

        {/* Fee */}

        <div className="booking-fee">

          <div>
            <span>Consultation fee</span>
            <strong>{doctor.fee}</strong>
          </div>

          <div className="secure-payment">
            🔒 Secure payment
          </div>

        </div>

        {/* Continue */}

        <button
          className="primary-button booking-continue"
          onClick={continueBooking}
        >
          Continue
        </button>

        <p className="booking-policy">
          Cancellation and rescheduling are subject to
          the partner doctor's or clinic's policy.
        </p>

      </div>

    </div>
  );
}

export default Booking;