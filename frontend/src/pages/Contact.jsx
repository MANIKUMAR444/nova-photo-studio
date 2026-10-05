import { Link } from "react-router-dom";
import { useState } from "react";
import API_URL from "../api";

function Contact() {
  
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
});

const [submitted, setSubmitted] = useState(false);

const handleChange = (event) => {
  const { name, value } = event.target;

  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(
      `${API_URL}/api/inquiries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    if (response.ok) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } else {
      alert("Failed to send inquiry.");
    }

  } catch (error) {
    console.error(error);

    alert("Backend connection failed.");
  }
};



  return (
    <main className="public-page">

      {/* Header */}
      <header className="public-header">

        <Link to="/" className="public-logo">
          NO<span>VA</span>
        </Link>

        <nav className="public-nav">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>

          <Link to="/contact" className="active">
            Contact
          </Link>

          <Link
            to="/portal"
            className="public-portal-btn"
          >
            Portal ↓
          </Link>

        </nav>

      </header>


      {/* Hero */}
      <section className="contact-hero">

        <p className="section-tag">
          LET'S CONNECT
        </p>

        <h1>
          Your story starts
          <br />
          <span>with a conversation.</span>
        </h1>

        <p>
          Tell us about your special moment. We'll help
          turn it into memories you'll always be able
          to look back on.
        </p>

      </section>


      {/* Contact Content */}
      <section className="contact-section">

        {/* Contact Information */}
        <div className="contact-info">

          <p className="section-tag">
            GET IN TOUCH
          </p>

          <h2>
            We'd love to hear
            <span> from you.</span>
          </h2>

          <p className="contact-description">
            Whether you're planning a wedding, a special
            event or a portrait session, NOVA is ready
            to capture your story.
          </p>


          <div className="contact-details">

            <div className="contact-detail">
              <span>EMAIL</span>
              <p>hello@novastudio.com</p>
            </div>

            <div className="contact-detail">
              <span>PHONE</span>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-detail">
              <span>LOCATION</span>
              <p>Chennai, Tamil Nadu</p>
            </div>

          </div>

        </div>


        {/* Contact Form */}
        <form className="contact-form"
        onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label>Your Name</label>

              <input
  type="text"
  name="name"
  placeholder="Enter your name"
  value={formData.name}
  onChange={handleChange}
  required
/>
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
  type="email"
  name="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
  required
/>
            </div>

          </div>


          <div className="form-group">
            <label>Phone Number</label>

            <input
  type="tel"
  name="phone"
  placeholder="Enter your phone number"
  value={formData.phone}
  onChange={handleChange}
  required
/>
          </div>


          <div className="form-group">
            <label>What are you looking for?</label>

            <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  required
>
              <option value="" disabled>
                Select a service
              </option>

              <option>Wedding Photography</option>
              <option>Event Photography</option>
              <option>Portrait Session</option>
              <option>Other</option>

            </select>
          </div>


          <div className="form-group">
            <label>Tell us about your event</label>

            <textarea
  name="message"
  rows="6"
  placeholder="Tell us about your event, preferred date or anything else..."
  value={formData.message}
  onChange={handleChange}
  required
/>
          </div>


          <button
            type="submit"
            className="primary-btn contact-submit"
          >
            Send Inquiry →
          </button>


          {submitted && (
  <p className="form-success">
    ✓ Thank you! Your inquiry has been received.
  </p>
)}

        </form>

      </section>


      {/* Bottom Message */}
      <section className="contact-bottom">

        <p>
          Every great photograph begins with a moment.
        </p>

        <span>
          Let's make yours unforgettable.
        </span>

      </section>


      {/* Footer */}
      <footer className="public-footer">

        <div className="public-logo">
          NO<span>VA</span>
        </div>

        <p>
          © 2026 NOVA Photography Studio
        </p>

      </footer>

    </main>
  );
}

export default Contact;