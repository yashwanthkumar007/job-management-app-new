import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpeg"; // Adjust the path to your logo file
import CreateJobModal from "./CreateJobModal"; // Make sure you have this component

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </div>
        <ul className="navbar__links">
          <li>Home</li>
          <li>Find Jobs</li>
          <li>Find Talents</li>
          <li>About us</li>
          <li>Testimonials</li>
        </ul>
        <div className="navbar__right">
          <button
            className="create-btn"
            onClick={() => setShowModal(true)}
          >
            Create Jobs
          </button>
        </div>
      </nav>

      {showModal && (
        <CreateJobModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Navbar;
