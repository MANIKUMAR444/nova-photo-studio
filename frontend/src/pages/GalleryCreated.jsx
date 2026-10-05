import { Link } from "react-router-dom";
import { useState } from "react";

function GalleryCreated() {

  const [copied, setCopied] = useState(false);

  const storedGallery =
    localStorage.getItem("createdGallery");

  const gallery = storedGallery
    ? JSON.parse(storedGallery)
    : null;

  const galleryId = gallery
    ? gallery.galleryId
    : "Gallery ID not available";

  const handleCopy = () => {

    if (!gallery) {
      return;
    }

    navigator.clipboard.writeText(galleryId);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="gallery-created-page">

      <div className="gallery-created-container">

        <div className="success-icon">
          ✓
        </div>

        <p className="section-tag">
          GALLERY CREATED
        </p>

        <h1>
          Your Gallery is
          <span> Ready.</span>
        </h1>

        <p className="gallery-created-description">
          The private gallery has been created successfully.
          Share the Gallery ID with your client so they can
          access their photographs.
        </p>

        {/* Gallery details */}

        {gallery && (
          <div className="gallery-summary">

            <p>
              <strong>Client:</strong>
              {" "}
              {gallery.clientName}
            </p>

            <p>
              <strong>Event:</strong>
              {" "}
              {gallery.eventName}
            </p>

          </div>
        )}

        {/* Gallery ID */}

        <div className="gallery-id-card">

          <p className="gallery-id-label">
            YOUR UNIQUE GALLERY ID
          </p>

          <div className="gallery-id-value">
            {galleryId}
          </div>

          <p className="gallery-id-info">
            Keep this ID safe. Your client will use it
            to access this gallery.
          </p>

        </div>

        <div className="gallery-created-actions">

          <Link
            to="/upload-photos"
            className="primary-btn"
          >
            Upload Photos →
          </Link>

          <button
            className="copy-id-btn"
            onClick={handleCopy}
            disabled={!gallery}
          >
            {copied
              ? "Copied ✓"
              : "Copy Gallery ID"
            }
          </button>

        </div>

        <Link
          to="/photographer-dashboard"
          className="back-dashboard"
        >
          ← Back to Dashboard
        </Link>

      </div>

    </main>
  );
}

export default GalleryCreated;