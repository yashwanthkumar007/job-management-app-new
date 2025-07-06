import React from "react";
import "../styles/RegisterPage.css";

function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
}

export default RegisterPage;
