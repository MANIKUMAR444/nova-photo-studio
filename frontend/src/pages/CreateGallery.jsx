import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../api";

function CreateGallery() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    eventName: ""
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
        `${API_URL}/api/galleries/create`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      if (response.ok) {

        const gallery =
          await response.json();

        localStorage.setItem(
          "createdGallery",
          JSON.stringify(gallery)
        );

        navigate("/gallery-created");

      } else {

        const message =
          await response.text();

        setError(
          message ||
          "Unable to create gallery."
        );
      }

    } catch (error) {

      console.error(
        "Gallery creation error:",
        error
      );

      setError(
        "Unable to connect to backend."
      );
    }
  };


  return (

    <main className="dashboard-page">

      {/* Sidebar */}

      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          NO<span>VA</span>
        </div>


        <div className="photographer-profile">

          <div className="profile-avatar">
            P
          </div>

          <div>
            <h3>Photographer</h3>
            <p>Studio Account</p>
          </div>

        </div>


        <nav className="dashboard-nav">

          <Link
            to="/photographer-dashboard"
            className="dashboard-nav-item"
          >
            <span>01</span>
            Dashboard
          </Link>


          <Link
            to="/create-gallery"
            className="dashboard-nav-item active"
          >
            <span>02</span>
            Create Gallery
          </Link>


          <Link
            to="/upload-photos"
            className="dashboard-nav-item"
          >
            <span>03</span>
            Upload Photos
          </Link>


          <Link
            to="#"
            className="dashboard-nav-item"
          >
            <span>04</span>
            Clients
          </Link>


          <Link
            to="#"
            className="dashboard-nav-item"
          >
            <span>05</span>
            Settings
          </Link>

        </nav>


        <Link
          to="/portal"
          className="dashboard-logout"
        >
          ← Logout
        </Link>

      </aside>


      {/* Main Content */}

      <section className="dashboard-content">

        <div className="dashboard-topbar">

          <div>

            <p className="section-tag">
              GALLERY MANAGEMENT
            </p>

            <h1>
              Create a
              <span> New Gallery.</span>
            </h1>

            <p className="dashboard-subtitle">
              Create a private gallery for your client
              before uploading their photographs.
            </p>

          </div>

        </div>


        {/* Gallery Form */}

        <div className="create-gallery-card">

          <div className="create-gallery-heading">

            <span className="create-gallery-number">
              01
            </span>

            <div>

              <h2>
                Gallery Information
              </h2>

              <p>
                Enter the basic details about this
                photography session.
              </p>

            </div>

          </div>


          <form
            className="gallery-form"
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


            {/* CLIENT INFORMATION */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  CLIENT NAME
                </label>

                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  placeholder="Enter client's name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  CLIENT EMAIL
                </label>

                <input
                  type="email"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  placeholder="Enter client's email"
                  required
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>
                  CLIENT PHONE
                </label>

                <input
                  type="tel"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  EVENT NAME
                </label>

                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="Example: Arun & Priya Wedding"
                  required
                />

              </div>

            </div>


            {/* EVENT DETAILS */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  EVENT TYPE
                </label>

                <select defaultValue="">

                  <option
                    value=""
                    disabled
                  >
                    Select event type
                  </option>

                  <option>
                    Wedding
                  </option>

                  <option>
                    Birthday
                  </option>

                  <option>
                    Engagement
                  </option>

                  <option>
                    Portrait
                  </option>

                  <option>
                    Corporate
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  EVENT DATE
                </label>

                <input
                  type="date"
                />

              </div>

            </div>


            {/* DESCRIPTION */}

            <div className="form-group">

              <label>
                DESCRIPTION
              </label>

              <textarea
                rows="5"
                placeholder="Add a short description about this gallery..."
              ></textarea>

            </div>


            {/* VISIBILITY */}

            <div className="gallery-visibility">

              <div>

                <h3>
                  Gallery Visibility
                </h3>

                <p>
                  Your gallery will be private and
                  accessible only through its unique ID.
                </p>

              </div>

              <span className="private-badge">
                PRIVATE
              </span>

            </div>


            {/* ACTIONS */}

            <div className="gallery-form-actions">

              <Link
                to="/photographer-dashboard"
                className="cancel-btn"
              >
                Cancel
              </Link>


              <button
                type="submit"
                className="primary-btn"
              >
                Create Gallery →
              </button>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}

export default CreateGallery;