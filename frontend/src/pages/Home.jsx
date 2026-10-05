import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero.jpg";
import weddingImage from "../assets/images/wedding.jpg";
import portraitImage from "../assets/images/portrait.jpg";
import birthdayImage from "../assets/images/birthday.jpg";

function Home() {
  return (
    <main className="home">

      {/* =========================
          HEADER
      ========================= */}

      <header className="public-header">

        <Link
          to="/"
          className="public-logo"
        >
          NO<span>VA</span>
        </Link>

        <nav className="public-nav">

          <Link
            to="/"
            className="active"
          >
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
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


      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            NOVA PHOTOGRAPHY STUDIO
          </p>

          <h1>
            Your Moments.
            <br />
            Our <span>Story.</span>
          </h1>

          <p className="hero-description">
            We capture the moments that matter and preserve them as
            memories you can access anytime, anywhere.
          </p>


          <div className="hero-buttons">

            <Link
              to="/gallery"
              className="primary-btn"
            >
              Explore Our Work →
            </Link>

            <Link
              to="/contact"
              className="secondary-btn"
            >
              Book a Session
            </Link>

          </div>


          <div className="hero-stats">

            <div className="stat">
              <h3>500+</h3>
              <p>Sessions</p>
            </div>

            <div className="stat">
              <h3>10K+</h3>
              <p>Memories</p>
            </div>

            <div className="stat">
              <h3>100%</h3>
              <p>Digital Access</p>
            </div>

          </div>

        </div>


        {/* REAL HERO IMAGE */}

        <div className="hero-image">

          <img
            src={heroImage}
            alt="NOVA Photography"
          />

        </div>

      </section>


      {/* =========================
          SERVICES SECTION
      ========================= */}

      <section className="services">

        <div className="section-heading">

          <p className="section-tag">
            WHAT WE OFFER
          </p>

          <h2>
            More Than Just
            <span> Photography.</span>
          </h2>

          <p>
            From capturing your moments to delivering your memories,
            NOVA makes the entire experience simple.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <div className="service-number">
              01
            </div>

            <h3>
              Photography Sessions
            </h3>

            <p>
              Professional photography for weddings, events,
              portraits, celebrations and special moments.
            </p>

            <span className="service-arrow">
              →
            </span>

          </div>


          <div className="service-card">

            <div className="service-number">
              02
            </div>

            <h3>
              Professional Editing
            </h3>

            <p>
              Your photos are carefully edited and prepared
              before being delivered to your private gallery.
            </p>

            <span className="service-arrow">
              →
            </span>

          </div>


          <div className="service-card">

            <div className="service-number">
              03
            </div>

            <h3>
              Private Digital Gallery
            </h3>

            <p>
              Every client receives a unique gallery ID to
              access their photos securely from anywhere.
            </p>

            <span className="service-arrow">
              →
            </span>

          </div>


          <div className="service-card">

            <div className="service-number">
              04
            </div>

            <h3>
              Access Anytime
            </h3>

            <p>
              View and download your memories whenever you
              need them without waiting for physical delivery.
            </p>

            <span className="service-arrow">
              →
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          DIGITAL DELIVERY SECTION
      ========================= */}

      <section className="digital-delivery">

        <div className="delivery-content">

          <p className="section-tag">
            YOUR MEMORIES, YOUR WAY
          </p>

          <h2>
            Your Photos.
            <br />
            <span>Always With You.</span>
          </h2>

          <p className="delivery-description">
            No more waiting for your photographer to send your photos.
            NOVA gives every client a private digital gallery that can
            be accessed from anywhere, anytime.
          </p>


          <div className="delivery-features">

            <div className="delivery-feature">

              <div className="feature-icon">
                01
              </div>

              <div>
                <h3>
                  Unique Gallery ID
                </h3>

                <p>
                  Get a unique ID for your personal photo gallery.
                </p>
              </div>

            </div>


            <div className="delivery-feature">

              <div className="feature-icon">
                02
              </div>

              <div>
                <h3>
                  Access Anywhere
                </h3>

                <p>
                  Open your gallery from your phone, tablet or computer.
                </p>
              </div>

            </div>


            <div className="delivery-feature">

              <div className="feature-icon">
                03
              </div>

              <div>
                <h3>
                  Download Easily
                </h3>

                <p>
                  Select your favourite memories and download them anytime.
                </p>
              </div>

            </div>

          </div>


          <Link
            to="/client-gallery"
            className="primary-btn delivery-btn"
          >
            Access Your Gallery →
          </Link>

        </div>


        {/* Gallery Preview */}

        <div className="gallery-preview">

          <div className="gallery-window">

            <div className="gallery-header">

              <div>

                <span className="gallery-label">
                  NOVA DIGITAL GALLERY
                </span>

                <h3>
                  Wedding Memories
                </h3>

              </div>

              <span className="gallery-id">
                NOVA-8K29X
              </span>

            </div>


            <div className="photo-grid">

              <div className="photo-box photo-one">

                <img
                  src={weddingImage}
                  alt="Wedding photography"
                />

              </div>


              <div className="photo-box photo-two">

                <img
                  src={portraitImage}
                  alt="Portrait photography"
                />

              </div>


              <div className="photo-box photo-three">

                <img
                  src={birthdayImage}
                  alt="Birthday photography"
                />

              </div>


              <div className="photo-box photo-four">

                <img
                  src={heroImage}
                  alt="Photography session"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          GALLERY PREVIEW SECTION
      ========================= */}

      <section className="gallery-section">

        <div className="gallery-heading">

          <div>

            <p className="section-tag">
              SELECTED WORK
            </p>

            <h2>
              Moments Worth
              <span> Remembering.</span>
            </h2>

          </div>

          <p>
            A glimpse into the stories we've captured
            for our clients.
          </p>

        </div>


        <div className="gallery-grid">

          {/* Wedding */}

          <div className="gallery-card gallery-large">

  <img
    src={weddingImage}
    alt="Wedding photography"
  />

            <div className="gallery-overlay">

              <span>
                01
              </span>

              <h3>
                Wedding Stories
              </h3>

              <p>
                Love • Emotion • Celebration
              </p>

            </div>

          </div>


          {/* Portrait */}

          <div className="gallery-card gallery-small">

  <img
    src={portraitImage}
    alt="Portrait photography"
  />

            <div className="gallery-overlay">

              <span>
                02
              </span>

              <h3>
                Portraits
              </h3>

              <p>
                Personal • Authentic
              </p>

            </div>

          </div>


          {/* Birthday */}

          <div className="gallery-card gallery-small">

  <img
    src={birthdayImage}
    alt="Birthday photography"
  />

            <div className="gallery-overlay">

              <span>
                03
              </span>

              <h3>
                Events
              </h3>

              <p>
                Energy • Moments
              </p>

            </div>

          </div>


          {/* Hero image */}

          <div className="gallery-card gallery-wide">

  <img
    src={heroImage}
    alt="Photography session"
  />

            <div className="gallery-overlay">

              <span>
                04
              </span>

              <h3>
                Celebrations
              </h3>

              <p>
                Joy • Memories • Togetherness
              </p>

            </div>

          </div>

        </div>


        <div className="gallery-button-container">

          <Link
            to="/gallery"
            className="secondary-btn"
          >
            View Full Gallery →
          </Link>

        </div>

      </section>


      {/* =========================
          ABOUT NOVA SECTION
      ========================= */}

      <section className="about-section">

        <div className="about-visual">

          <div className="about-frame">

            <div className="about-logo">
              NOVA
            </div>

            <span>
              EST. 2026
            </span>

          </div>

        </div>


        <div className="about-content">

          <p className="section-tag">
            ABOUT NOVA
          </p>

          <h2>
            We Don't Just
            <br />
            <span>Take Photos.</span>
            <br />
            We Preserve Stories.
          </h2>

          <p className="about-description">
            NOVA is a modern photography studio built around one simple idea:
            your memories should never be difficult to access.
          </p>

          <p className="about-description">
            From the moment your photographs are captured to the moment
            you download them, NOVA brings photography and digital
            technology together in one simple experience.
          </p>

          <div className="about-highlight">

            <span className="highlight-line"></span>

            <p>
              "Your memories deserve more than a delivery date."
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          WHY CHOOSE NOVA
      ========================= */}

      <section className="why-section">

        <div className="why-heading">

          <p className="section-tag">
            THE NOVA DIFFERENCE
          </p>

          <h2>
            Photography Meets
            <span> Technology.</span>
          </h2>

          <p>
            We've designed NOVA to make the entire photography
            experience easier for both photographers and clients.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-item">

            <span>
              01
            </span>

            <h3>
              Faster Delivery
            </h3>

            <p>
              Upload photos once they're ready instead of relying
              on physical delivery or long waiting periods.
            </p>

          </div>


          <div className="why-item">

            <span>
              02
            </span>

            <h3>
              Secure Galleries
            </h3>

            <p>
              Each client receives a unique gallery ID to access
              their personal collection of memories.
            </p>

          </div>


          <div className="why-item">

            <span>
              03
            </span>

            <h3>
              Access Anywhere
            </h3>

            <p>
              Your photos are available online whenever you need
              them, whether you're at home or travelling.
            </p>

          </div>


          <div className="why-item">

            <span>
              04
            </span>

            <h3>
              Easy Downloads
            </h3>

            <p>
              Select and download your favourite photos whenever
              you want, directly from your gallery.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className="contact-section">

        <div className="contact-info">

          <p className="section-tag">
            GET IN TOUCH
          </p>

          <h2>
            Let's Create
            <br />
            Something <span>Beautiful.</span>
          </h2>

          <p className="contact-description">
            Planning a wedding, celebration, portrait session or
            special event? Tell us about it and let's make it memorable.
          </p>


          <div className="contact-details">

            <div className="contact-detail">

              <span>
                01
              </span>

              <div>
                <h3>
                  Visit Us
                </h3>

                <p>
                  Chennai, Tamil Nadu
                </p>
              </div>

            </div>


            <div className="contact-detail">

              <span>
                02
              </span>

              <div>
                <h3>
                  Email Us
                </h3>

                <p>
                  hello@nova.com
                </p>
              </div>

            </div>


            <div className="contact-detail">

              <span>
                03
              </span>

              <div>
                <h3>
                  Call Us
                </h3>

                <p>
                  +91 98765 43210
                </p>
              </div>

            </div>

          </div>

        </div>


        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you! Your enquiry has been received.");
            }}
          >

            <div className="form-row">

              <div className="form-group">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                EVENT TYPE
              </label>

              <select
                defaultValue=""
                required
              >

                <option
                  value=""
                  disabled
                >
                  Select an event
                </option>

                <option>
                  Wedding
                </option>

                <option>
                  Birthday
                </option>

                <option>
                  Portrait
                </option>

                <option>
                  Corporate Event
                </option>

                <option>
                  Other
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>
                YOUR MESSAGE
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your event..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="primary-btn contact-btn"
            >
              Send Enquiry →
            </button>

          </form>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="footer-logo">
              NO<span>VA</span>
            </div>

            <p>
              Capturing moments.
              <br />
              Preserving stories.
            </p>

          </div>


          <div className="footer-links">

            <div>

              <h4>
                EXPLORE
              </h4>

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

            </div>


            <div>

              <h4>
                CONNECT
              </h4>

              <Link to="/contact">
                Contact
              </Link>

              <a href="#">
                Instagram
              </a>

              <a href="#">
                Facebook
              </a>

            </div>


            <div>

              <h4>
                PORTAL
              </h4>

              <Link to="/photographer-login">
                Photographer
              </Link>

              <Link to="/client-login">
                Client
              </Link>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 NOVA Photography Studio. All rights reserved.
          </p>

          <p>
            Photography × Technology
          </p>

        </div>

      </footer>

    </main>
  );
}

export default Home;