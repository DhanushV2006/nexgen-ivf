import { useState } from "react";
import "./App.css";

// -----------------------------
// ENTRY SCREENS
// -----------------------------
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification";

// -----------------------------
// PATIENT SCREENS
// -----------------------------
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import DoctorProfile from "./pages/DoctorProfile";
import Booking from "./pages/Booking";
import BookingReview from "./pages/BookingReview";
import Payment from "./pages/Payment";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import Journey from "./pages/Journey";
import Centres from "./pages/Centres";
import CentreProfile from "./pages/CentreProfile";
import SecondOpinion from "./pages/SecondOpinion";
import Appointments from "./pages/Appointments";
import Documents from "./pages/Documents";
import Profile from "./pages/Profile";

// -----------------------------
// PARTNER / ADMIN
// -----------------------------
import PartnerClinic from "./pages/PartnerClinic";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  // -----------------------------
  // MAIN APP STATE
  // -----------------------------

  const [screen, setScreen] = useState("splash");

  // -----------------------------
  // SELECTED DATA
  // -----------------------------

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [selectedCentre, setSelectedCentre] = useState(null);
  const [phone, setPhone] = useState("");


  // =====================================================
  // ENTRY FLOW
  // =====================================================


  // -----------------------------
  // SPLASH SCREEN
  // -----------------------------

  if (screen === "splash") {
    return (
      <Splash
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // ONBOARDING SCREEN
  // -----------------------------

  if (screen === "onboarding") {
    return (
      <Onboarding
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // LOGIN SCREEN
  // -----------------------------

  if (screen === "login") {
    return (
      <Login
        onNavigate={(page, data) => {
          if (page === "otp") {
            setPhone(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // OTP VERIFICATION SCREEN
  // -----------------------------

  if (screen === "otp") {
    return (
      <OTPVerification
        phone={phone}
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // =====================================================
  // PATIENT APP
  // =====================================================


  // -----------------------------
  // HOME DASHBOARD
  // -----------------------------

  if (screen === "home") {
    return (
      <Home
        onNavigate={(page, data) => {
          if (data) {
            setSelectedDoctor(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // SPECIALISTS SCREEN
  // -----------------------------

  if (screen === "specialists") {
    return (
      <Specialists
        onNavigate={(page, data) => {
          if (data) {
            setSelectedDoctor(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // DOCTOR PROFILE
  // -----------------------------

  if (screen === "doctor-profile") {
    return (
      <DoctorProfile
        doctor={selectedDoctor}
        onNavigate={(page, data) => {
          if (data) {
            setSelectedDoctor(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // BOOKING
  // -----------------------------

  if (screen === "booking") {
    return (
      <Booking
        doctor={selectedDoctor}
        onNavigate={(page, data) => {
          if (page === "booking-review") {
            setBookingData(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // BOOKING REVIEW
  // -----------------------------

  if (screen === "booking-review") {
    return (
      <BookingReview
        booking={bookingData}
        onNavigate={(page, data) => {
          if (data) {
            setBookingData(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // PAYMENT
  // -----------------------------

  if (screen === "payment") {
    return (
      <Payment
        booking={bookingData}
        onNavigate={(page, data) => {
          if (data) {
            setBookingData(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // APPOINTMENT SUCCESS
  // -----------------------------

  if (screen === "appointment-success") {
    return (
      <AppointmentSuccess
        booking={bookingData}
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // MY JOURNEY
  // -----------------------------

  if (screen === "journey") {
    return (
      <Journey
        booking={bookingData}
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // IVF CENTRES
  // -----------------------------

  if (screen === "centres") {
    return (
      <Centres
        onNavigate={(page, data) => {
          if (data) {
            setSelectedCentre(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // CENTRE PROFILE
  // -----------------------------

  if (screen === "centre-profile") {
    return (
      <CentreProfile
        centre={selectedCentre}
        onNavigate={(page, data) => {
          if (data) {
            setSelectedDoctor(data);
          }

          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // SECOND OPINION
  // -----------------------------

  if (screen === "second-opinion") {
    return (
      <SecondOpinion
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // APPOINTMENTS
  // -----------------------------

  if (screen === "appointments") {
    return (
      <Appointments
        booking={bookingData}
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // DOCUMENTS
  // -----------------------------

  if (screen === "documents") {
    return (
      <Documents
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // PROFILE
  // -----------------------------

  if (screen === "profile") {
    return (
      <Profile
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // =====================================================
  // PARTNER CLINIC
  // =====================================================


  // -----------------------------
  // PARTNER CLINIC DASHBOARD
  // -----------------------------

  if (screen === "partner-clinic") {
    return (
      <PartnerClinic
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // =====================================================
  // ADMIN
  // =====================================================


  // -----------------------------
  // ADMIN DASHBOARD
  // -----------------------------

  if (screen === "admin") {
    return (
      <AdminDashboard
        onNavigate={(page) => {
          setScreen(page);
        }}
      />
    );
  }


  // -----------------------------
  // FALLBACK
  // -----------------------------

  return (
    <Splash
      onNavigate={(page) => {
        setScreen(page);
      }}
    />
  );
}


export default App;