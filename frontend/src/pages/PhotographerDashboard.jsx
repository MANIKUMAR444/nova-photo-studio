import { Link } from "react-router-dom";

function PhotographerDashboard() {
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
            className="dashboard-nav-item active"
          >
            <span>01</span>
            Dashboard
          </Link>

          <Link
            to="#"
            className="dashboard-nav-item"
          >
            <span>02</span>
            Galleries
          </Link>

          <Link
            to="#"
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
              PHOTOGRAPHER DASHBOARD
            </p>

            <h1>
              Good morning,
              <span> Photographer.</span>
            </h1>

            <p className="dashboard-subtitle">
              Manage your galleries, photos and clients
              from one place.
            </p>

          </div>


          <div className="dashboard-user">

            <div className="profile-avatar small">
              P
            </div>

            <div>
              <strong>Photographer</strong>
              <p>Online</p>
            </div>

          </div>

        </div>


        {/* Statistics */}

        <div className="dashboard-stats">

          <div className="stat-card">

            <span className="stat-number">
              12
            </span>

            <span className="stat-label">
              TOTAL GALLERIES
            </span>

          </div>


          <div className="stat-card">

            <span className="stat-number">
              8
            </span>

            <span className="stat-label">
              ACTIVE GALLERIES
            </span>

          </div>


          <div className="stat-card">

            <span className="stat-number">
              156
            </span>

            <span className="stat-label">
              TOTAL PHOTOS
            </span>

          </div>


          <div className="stat-card highlight">

            <span className="stat-number">
              24
            </span>

            <span className="stat-label">
              CLIENTS
            </span>

          </div>

        </div>


        {/* Quick Actions */}

        <div className="dashboard-section-header">

          <div>

            <p className="section-tag">
              QUICK ACTIONS
            </p>

            <h2>
              What would you like to do?
            </h2>

          </div>

        </div>


        <div className="quick-actions">

          <Link
  to="/create-gallery"
  className="quick-action"
>

            <span className="quick-action-number">
              01
            </span>

            <h3>
              Create Gallery
            </h3>

            <p>
              Create a new private gallery for a client.
            </p>

            <span className="action-arrow">
              →
            </span>

          </Link>


          <Link to="#" className="quick-action">

            <span className="quick-action-number">
              02
            </span>

            <h3>
              Upload Photos
            </h3>

            <p>
              Add photos to an existing client gallery.
            </p>

            <span className="action-arrow">
              →
            </span>

          </Link>


          <Link to="#" className="quick-action">

            <span className="quick-action-number">
              03
            </span>

            <h3>
              Manage Clients
            </h3>

            <p>
              View and manage your photography clients.
            </p>

            <span className="action-arrow">
              →
            </span>

          </Link>

        </div>


        {/* Recent Galleries */}

        <div className="dashboard-section-header recent-header">

          <div>

            <p className="section-tag">
              RECENT ACTIVITY
            </p>

            <h2>
              Recent Galleries
            </h2>

          </div>

          <Link to="#">
            View All →
          </Link>

        </div>


        <div className="gallery-table">

          <div className="gallery-table-header">
            <span>GALLERY</span>
            <span>CLIENT</span>
            <span>PHOTOS</span>
            <span>STATUS</span>
            <span>GALLERY ID</span>
          </div>


          <div className="gallery-row">

            <div>
              <strong>
                Wedding — Arun & Priya
              </strong>
              <p>
                18 Aug 2026
              </p>
            </div>

            <span>
              Arun & Priya
            </span>

            <span>
              245
            </span>

            <span className="status active-status">
              Active
            </span>

            <span className="gallery-id">
              NV-8X42K
            </span>

          </div>


          <div className="gallery-row">

            <div>
              <strong>
                Birthday — Rahul
              </strong>
              <p>
                15 Aug 2026
              </p>
            </div>

            <span>
              Rahul
            </span>

            <span>
              86
            </span>

            <span className="status active-status">
              Active
            </span>

            <span className="gallery-id">
              NV-4P71M
            </span>

          </div>


          <div className="gallery-row">

            <div>
              <strong>
                Portrait — Sneha
              </strong>
              <p>
                12 Aug 2026
              </p>
            </div>

            <span>
              Sneha
            </span>

            <span>
              42
            </span>

            <span className="status">
              Archived
            </span>

            <span className="gallery-id">
              NV-2K93Q
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}

export default PhotographerDashboard;