import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API_URL from "../api";

function PhotographerLogin() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

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

    try {
      const response = await fetch(
        `${API_URL}/api/photographers/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {

        const photographer = await response.json();

        localStorage.setItem(
          "photographer",
          JSON.stringify(photographer)
        );

        navigate("/photographer-dashboard");

      } else {

        const message = await response.text();

        setError(
          message || "Invalid email or password."
        );
      }

    } catch {

      setError(
        "Unable to connect to backend."
      );
    }
  };

  return (

    <main className="login-page">

      <div className="login-container">

        <div className="login-brand">
          NOVA
        </div>

        <p className="section-tag">
          PHOTOGRAPHER PORTAL
        </p>

        <h1>
          Welcome
          <span> Back.</span>
        </h1>

        <p className="login-description">
          Sign in to manage your galleries, upload photos
          and deliver memories to your clients.
        </p>

        <form
          className="login-form"
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

            <label>PASSWORD</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

          </div>

          <div className="login-options">

            <label className="remember-me">

              <input type="checkbox" />

              <span>Remember me</span>

            </label>

            <a href="#">
              Forgot password?
            </a>

          </div>

          <button
            type="submit"
            className="primary-btn login-btn"
          >
            Sign In →
          </button>

        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <p className="register-text">
          Don't have a photographer account?
        </p>

        <Link
          to="/photographer-register"
          className="register-link"
        >
          Create Photographer Account →
        </Link>

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

export default PhotographerLogin;