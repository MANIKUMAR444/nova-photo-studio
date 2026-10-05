import { Link } from "react-router-dom";

function Portal() {
  return (
    <main className="portal-page">

      <div className="portal-header">

        <p className="section-tag">
          NOVA PORTAL
        </p>

        <h1>
          Welcome to
          <span> NOVA.</span>
        </h1>

        <p>
          Choose how you would like to continue.
        </p>

      </div>


      <div className="portal-options">

        {/* Photographer */}
        <div className="portal-card">

          <div className="portal-icon">
            📷
          </div>

          <span className="portal-number">
            01
          </span>

          <h2>
            Photographer
          </h2>

          <p>
            Upload, organize and manage your
            clients' photographs from one place.
          </p>

          <Link
            to="/photographer-login"
            className="portal-continue"
          >
            Continue →
          </Link>

        </div>


        {/* Client */}
        <div className="portal-card">

          <div className="portal-icon">
            👤
          </div>

          <span className="portal-number">
            02
          </span>

          <h2>
            Client
          </h2>

          <p>
            Access your private gallery, view your
            memories and download your photographs.
          </p>

          <Link
            to="/client-login"
            className="portal-continue"
          >
            Continue →
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Portal;