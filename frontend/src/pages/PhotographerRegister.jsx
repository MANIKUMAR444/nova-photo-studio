import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API_URL from "../api";

function PhotographerRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  setError("");

  if (formData.password !== confirmPassword) {
    setError("Password and Confirm Password do not match.");
    return;
  }

  try {
    const response = await fetch(
      `${API_URL}/api/photographers/register`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)
      }
    );

    if (response.ok) {
      navigate("/photographer-login");
    } else {
      const message = await response.text();

      setError(
        message || "Registration failed. Please try again."
      );
    }

  } catch {
    setError(
      "Unable to connect to backend. Please check whether the backend is running."
    );
  }
};

  return (
    <main className="register-page">

      <div className="register-container">

        <div className="register-brand">
          NOVA
        </div>

        <p className="section-tag">
          PHOTOGRAPHER PORTAL
        </p>

        <h1>
          Create Your
          <span> Account.</span>
        </h1>

        <p className="register-description">
          Join NOVA and manage your photography business,
          galleries and client memories from one place.
        </p>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          {error && (
  <div
    style={{
      color: "#ff4d00",
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "15px"
    }}
  >
    {error}
  </div>
)}

          <div className="form-row">

            <div className="form-group">

              <label>PHOTOGRAPHER NAME</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />

            </div>

            <div className="form-group">

              <label>STUDIO NAME</label>

              <input
                type="text"
                placeholder="Your studio name"
              />

            </div>

          </div>

          <div className="form-row">

            <div className="form-group">

              <label>EMAIL ADDRESS</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>

            <div className="form-group">

              <label>PHONE NUMBER</label>

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
              />

            </div>

          </div>

          <div className="form-group">

            <label>PASSWORD</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />

          </div>

          <div className="form-group">

            <label>CONFIRM PASSWORD</label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              placeholder="Confirm your password"
              required
            />

          </div>

          <label className="terms-checkbox">

            <input type="checkbox" required />

            <span>
              I agree to NOVA's Terms & Conditions and
              Privacy Policy.
            </span>

          </label>

          <button
            type="submit"
            className="primary-btn register-btn"
          >
            Create Account →
          </button>

        </form>

        <div className="existing-account">

          <span>
            Already have an account?
          </span>

          <Link to="/photographer-login">
            Sign In
          </Link>

        </div>

        <Link
          to="/portal"
          className="back-portal"
        >
          ← Back to Portal
        </Link>

      </div>

    </main>
  );
}

export default PhotographerRegister;