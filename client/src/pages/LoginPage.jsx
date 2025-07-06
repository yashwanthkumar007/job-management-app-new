import React from "react";
import "../styles/LoginPage.css";

function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google"; // Adjust URL
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add manual login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button className="google-btn" onClick={handleGoogleLogin}>
        Continue with Google
      </button>
      <div className="divider">OR</div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default LoginPage;
