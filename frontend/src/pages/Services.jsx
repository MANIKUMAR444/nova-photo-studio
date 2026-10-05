import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="public-page">

      {/* Header */}

      <header className="public-header">

        <Link to="/" className="public-logo">
          NO<span>VA</span>
        </Link>

        <nav className="public-nav">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link
            to="/services"
            className="active"
          >
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


      {/* Hero Section */}

      <section className="services-hero">

        <p className="section-tag">
          WHAT WE CREATE
        </p>

        <h1>
          Every moment
          <br />
          <span>deserves a story.</span>
        </h1>

        <p>
          From intimate celebrations to unforgettable
          milestones, NOVA captures the moments you will
          want to remember forever.
        </p>

      </section>


      {/* Services */}

      <section className="services-section">

        <div className="service-card">

          <div className="service-number">
            01
          </div>

          <div className="service-content">

            <h2>
              Wedding
              <span> Photography.</span>
            </h2>

            <p>
              Your wedding is more than a single day.
              We capture every emotion, detail and moment
              so your story can be remembered forever.
            </p>

            <ul>
              <li>Full Wedding Coverage</li>
              <li>Pre-Wedding Photography</li>
              <li>Candid Photography</li>
              <li>Private Digital Gallery</li>
            </ul>

          </div>

        </div>


        <div className="service-card">

          <div className="service-number">
            02
          </div>

          <div className="service-content">

            <h2>
              Events &
              <span> Celebrations.</span>
            </h2>

            <p>
              Birthdays, engagements, anniversaries and
              special celebrations captured with attention
              to every unforgettable moment.
            </p>

            <ul>
              <li>Birthday Photography</li>
              <li>Engagement Photography</li>
              <li>Anniversary Events</li>
              <li>Private Digital Gallery</li>
            </ul>

          </div>

        </div>


        <div className="service-card">

          <div className="service-number">
            03
          </div>

          <div className="service-content">

            <h2>
              Portrait
              <span> Sessions.</span>
            </h2>

            <p>
              Personal, professional and creative portrait
              photography designed to bring out your
              personality and style.
            </p>

            <ul>
              <li>Personal Portraits</li>
              <li>Professional Portraits</li>
              <li>Family Photography</li>
              <li>Studio Sessions</li>
            </ul>

          </div>

        </div>

      </section>


      {/* NOVA Digital Feature */}

      <section className="digital-gallery-section">

        <div>

          <p className="section-tag">
            THE NOVA DIFFERENCE
          </p>

          <h2>
            Photography that
            <br />
            <span>stays with you.</span>
          </h2>

          <p>
            Your photographs are not just delivered once.
            With NOVA, your memories can be organized in
            a private gallery and accessed whenever you
            need them.
          </p>

        </div>


        <div className="digital-feature-card">

          <span className="feature-id">
            NV-7K92XM
          </span>

          <h3>
            One Gallery ID.
          </h3>

          <p>
            Secure access to your photographs from
            anywhere.
          </p>

          <Link
            to="/client-gallery"
            className="feature-link"
          >
            Try Gallery Access →
          </Link>

        </div>

      </section>


      {/* CTA */}

      <section className="about-cta">

        <p className="section-tag">
          READY TO CREATE MEMORIES?
        </p>

        <h2>
          Let's make your
          <span> story unforgettable.</span>
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

export default Services;