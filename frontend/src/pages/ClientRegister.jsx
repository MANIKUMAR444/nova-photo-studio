import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../api";

function ClientRegister() {

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


    // Check password

    if (formData.password !== confirmPassword) {

      setError("Passwords do not match.");

      return;
    }


    try {

      const response = await fetch(
        `${API_URL}/api/clients/register`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      if (response.ok) {

        // Registration successful

        navigate("/client-login");

      } else {

        const message =
          await response.text();

        setError(
          message ||
          "Unable to create client account."
        );
      }

    } catch (error) {

      console.error(
        "Client registration error:",
        error
      );

      setError(
        "Unable to connect to backend."
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
          CLIENT PORTAL
        </p>


        <h1>
          Create Your
          <span> Account.</span>
        </h1>


        <p className="register-description">
          Create your NOVA client account and access
          your private photography galleries.
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


          {/* NAME */}

          <div className="form-group">

            <label>
              FULL NAME
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

          </div>


          {/* EMAIL */}

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


          {/* PASSWORD */}

          <div className="form-group">

            <label>
              PASSWORD
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />

          </div>


          {/* CONFIRM PASSWORD */}

          <div className="form-group">

            <label>
              CONFIRM PASSWORD
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(
                  event.target.value
                )
              }
              placeholder="Confirm your password"
              required
            />

          </div>


          {/* TERMS */}

          <label className="terms-checkbox">

            <input
              type="checkbox"
              required
            />

            <span>
              I agree to NOVA's Terms & Conditions and
              Privacy Policy.
            </span>

          </label>


          {/* SUBMIT */}

          <button
            type="submit"
            className="primary-btn register-btn"
          >
            Create Account →
          </button>

        </form>


        {/* LOGIN */}

        <div className="existing-account">

          <span>
            Already have an account?
          </span>

          <Link to="/client-login">
            Sign In
          </Link>

        </div>


        {/* BACK */}

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

export default ClientRegister;