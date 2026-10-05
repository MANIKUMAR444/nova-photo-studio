import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ClientDashboard() {

  const navigate = useNavigate();

  const [galleryId, setGalleryId] = useState("");

  // Temporary gallery data
  // We will connect this to Spring Boot later.
  const [galleries] = useState([
    {
      id: 1,
      galleryId: "NOVA-FA4DC62E",
      eventName: "Arun & Priya — Wedding",
      photoCount: 2
    }
  ]);


  const handleAccessGallery = (event) => {

    event.preventDefault();

    if (!galleryId.trim()) {
      alert("Please enter a Gallery ID.");
      return;
    }

    navigate(
      `/client-gallery?galleryId=${galleryId.trim().toUpperCase()}`
    );
  };


  return (

    <main className="client-dashboard-page">

      {/* Header */}

      <header className="client-dashboard-header">

        <Link
          to="/"
          className="client-dashboard-logo"
        >
          NO<span>VA</span>
        </Link>


        <div className="client-dashboard-header-right">

          <div className="client-header-profile">

            <div className="client-avatar">
              C
            </div>

            <div>
              <strong>Client</strong>
              <span>Client Account</span>
            </div>

          </div>


          <Link
            to="/portal"
            className="client-logout"
          >
            Logout
          </Link>

        </div>

      </header>


      {/* Main Content */}

      <section className="client-dashboard-content">

        {/* Welcome */}

        <div className="client-dashboard-welcome">

          <div>

            <p className="section-tag">
              CLIENT PORTAL
            </p>

            <h1>
              Welcome
              <span> Back.</span>
            </h1>

            <p>
              Access your private photography galleries
              and memories from one place.
            </p>

          </div>

        </div>


        {/* Statistics */}

        <div className="client-dashboard-stats">

          <div className="client-stat-card">

            <span>
              GALLERIES
            </span>

            <strong>
              {galleries.length}
            </strong>

          </div>


          <div className="client-stat-card">

            <span>
              TOTAL PHOTOS
            </span>

            <strong>
              {galleries.reduce(
                (total, gallery) =>
                  total + gallery.photoCount,
                0
              )}
            </strong>

          </div>


          <div className="client-stat-card">

            <span>
              ACCOUNT
            </span>

            <strong>
              ACTIVE
            </strong>

          </div>

        </div>


        {/* My Galleries */}

        <section className="client-my-galleries">

          <div className="client-section-heading">

            <div>

              <p className="section-tag">
                YOUR MEMORIES
              </p>

              <h2>
                My Galleries
              </h2>

            </div>

            <span>
              {galleries.length} Gallery
              {galleries.length !== 1 ? "ies" : ""}
            </span>

          </div>


          {galleries.length === 0 ? (

            /* No Galleries */

            <div className="no-galleries-card">

              <div className="no-galleries-icon">
                +
              </div>

              <h2>
                No galleries yet.
              </h2>

              <p>
                Your photographer hasn't shared a gallery
                with you yet. Once a gallery is available,
                it will appear here.
              </p>

            </div>

          ) : (

            /* Gallery List */

            <div className="client-gallery-list">

              {galleries.map((gallery) => (

                <div
                  className="client-gallery-card"
                  key={gallery.id}
                >

                  <div className="client-gallery-card-number">
                    01
                  </div>


                  <div className="client-gallery-card-info">

                    <p>
                      PRIVATE GALLERY
                    </p>

                    <h3>
                      {gallery.eventName}
                    </h3>

                    <span>
                      Gallery ID:{" "}
                      <strong>
                        {gallery.galleryId}
                      </strong>
                    </span>

                  </div>


                  <div className="client-gallery-card-photos">

                    <strong>
                      {gallery.photoCount}
                    </strong>

                    <span>
                      Photos
                    </span>

                  </div>


                  <Link
                    to={`/client-gallery?galleryId=${gallery.galleryId}`}
                    className="primary-btn"
                  >
                    View Gallery →
                  </Link>

                </div>

              ))}

            </div>

          )}

        </section>


        {/* Access Another Gallery */}

        <section className="client-access-gallery">

          <div className="client-access-content">

            <p className="section-tag">
              HAVE A GALLERY ID?
            </p>

            <h2>
              Access another
              <span> gallery.</span>
            </h2>

            <p>
              Enter the unique Gallery ID provided by
              your photographer.
            </p>

          </div>


          <form
            className="client-gallery-access-form"
            onSubmit={handleAccessGallery}
          >

            <input
              type="text"
              value={galleryId}
              onChange={(event) =>
                setGalleryId(
                  event.target.value.toUpperCase()
                )
              }
              placeholder="Example: NOVA-FA4DC62E"
            />


            <button
              type="submit"
              className="primary-btn"
            >
              Access Gallery →
            </button>

          </form>

        </section>

      </section>

    </main>

  );
}

export default ClientDashboard;