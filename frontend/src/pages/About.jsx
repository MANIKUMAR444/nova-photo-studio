import { Link } from "react-router-dom";

function About() {
  return (
    <main className="public-page">

      {/* Header */}

      <header className="public-header">

        <Link to="/" className="public-logo">
          NO<span>VA</span>
        </Link>

        <nav className="public-nav">

          <Link to="/">Home</Link>

          <Link to="/about" className="active">
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


      {/* About Hero */}

      <section className="about-hero">

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

        <div className="about-hero-content">

          <p className="section-tag">
            ABOUT NOVA
          </p>

          <h1>
            We preserve
            <br />
            <span>your moments.</span>
          </h1>

          <p className="about-intro">
            NOVA Photography Studio is built around one
            simple idea — your memories should always be
            accessible, beautifully preserved and never
            forgotten.
          </p>

        </div>

      </section>


      {/* Story */}

      <section className="about-story">

        <div className="about-story-label">

          <span>
            OUR STORY
          </span>

        </div>


        <div className="about-story-content">

          <h2>
            More than
            <span> photography.</span>
          </h2>

          <p>
            Every photograph tells a story. At NOVA, we
            believe that story deserves more than just
            being stored on a device.
          </p>

          <p>
            From weddings and celebrations to personal
            portraits and unforgettable events, we capture
            the moments that matter and preserve them for
            years to come.
          </p>

          <p>
            Our digital gallery system makes it simple for
            clients to access their memories from anywhere
            using a unique Gallery ID.
          </p>

        </div>

      </section>


      {/* Features */}

      <section className="about-features">

        <div className="about-feature">

          <span>01</span>

          <h3>
            Capture
          </h3>

          <p>
            Professional photography focused on the moments
            that matter most.
          </p>

        </div>


        <div className="about-feature">

          <span>02</span>

          <h3>
            Preserve
          </h3>

          <p>
            Your photographs are organized and securely
            preserved for long-term access.
          </p>

        </div>


        <div className="about-feature">

          <span>03</span>

          <h3>
            Access
          </h3>

          <p>
            Access your private gallery anytime and from
            anywhere using your Gallery ID.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="about-cta">

        <p className="section-tag">
          YOUR STORY STARTS HERE
        </p>

        <h2>
          Let's capture
          <span> something unforgettable.</span>
        </h2>

        <Link
          to="/contact"
          className="primary-btn"
        >
          Book a Session →
        </Link>

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

export default About;