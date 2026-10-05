import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../api";

function ClientLogin() {

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
        `${API_URL}/api/clients/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      if (response.ok) {

        const client = await response.json();

        console.log(
          "Client login successful:",
          client
        );

        // Store logged-in client
        localStorage.setItem(
          "loggedInClient",
          JSON.stringify(client)
        );

        // Go to Client Dashboard
        navigate("/client-dashboard");

      } else {

        const message =
          await response.text();

        setError(
          message ||
          "Invalid email or password."
        );
      }

    } catch (error) {

      console.error(
        "Client login error:",
        error
      );

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
          CLIENT PORTAL
        </p>


        <h1>
          Welcome
          <span> Back.</span>
        </h1>


        <p className="login-description">
          Sign in to access your private galleries,
          view your memories and download your photographs.
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

            <label>
              EMAIL ADDRESS
            </label>

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

            <label>
              PASSWORD
            </label>

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

              <input
                type="checkbox"
              />

              <span>
                Remember me
              </span>

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
          Don't have a client account?
        </p>


        <Link
          to="/client-register"
          className="register-link"
        >
          Create Client Account →
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

export default ClientLogin;