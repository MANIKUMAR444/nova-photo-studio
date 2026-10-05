import { useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api";

function ClientGallery() {

  const [galleryId, setGalleryId] = useState("");
  const [photos, setPhotos] = useState([]);
  const [galleryFound, setGalleryFound] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [error, setError] = useState("");

  const handleAccessGallery = async (event) => {

    event.preventDefault();

    setError("");

    const enteredGalleryId = galleryId.trim();

    if (!enteredGalleryId) {

      setError(
        "Please enter your Gallery ID."
      );

      return;
    }

    try {

      const response = await fetch(
  `${API_URL}/api/photos/gallery/${enteredGalleryId}`
);
      if (!response.ok) {

        setError(
          "Gallery not found. Please check your Gallery ID."
        );

        return;
      }

      const data = await response.json();

      if (data.length === 0) {

        setError(
          "No photos found for this Gallery ID."
        );

        return;
      }

      setPhotos(data);

      setGalleryFound(true);

    } catch (error) {

      console.error(
        "Gallery access error:",
        error
      );

      setError(
        "Unable to connect to backend."
      );

    }

  };


  const getPhotoUrl = (photo) => {
  return photo.filePath;
};


  const handleDownload = async () => {

  if (!selectedPhoto) {
    return;
  }

  try {

    const photoUrl =
      getPhotoUrl(selectedPhoto);

    const response =
      await fetch(photoUrl);

    if (!response.ok) {
      throw new Error(
        "Unable to download photo."
      );
    }

    const blob =
      await response.blob();

    const downloadUrl =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href =
      downloadUrl;

    link.download =
      selectedPhoto.fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(
      downloadUrl
    );

  } catch (error) {

    console.error(
      "Download error:",
      error
    );

    alert(
      "Unable to download photo."
    );

  }

};


  return (

    <main className="client-gallery-page">

      {/* Header */}

      <header className="client-gallery-header">

        <Link
          to="/"
          className="client-gallery-logo"
        >
          NO<span>VA</span>
        </Link>

        <Link
          to="/portal"
          className="client-gallery-back"
        >
          ← Portal
        </Link>

      </header>


      {!galleryFound ? (

        /* =========================
           GALLERY ACCESS
        ========================= */

        <section className="gallery-access-section">

          <div className="gallery-access-content">

            <p className="section-tag">
              PRIVATE GALLERY
            </p>

            <h1>
              Your memories,
              <span> waiting for you.</span>
            </h1>

            <p className="gallery-access-description">
              Enter the unique Gallery ID provided by your
              photographer to securely access your photos
              from anywhere.
            </p>


            <form
              className="gallery-access-form"
              onSubmit={handleAccessGallery}
            >

              <label>
                GALLERY ID
              </label>

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

              {error && (

                <p className="form-error">
                  {error}
                </p>

              )}

              <button
                type="submit"
                className="primary-btn"
              >
                Access Gallery →
              </button>

            </form>


            <div className="gallery-access-help">

              <span>
                Don't have a Gallery ID?
              </span>

              <p>
                Contact your photographer or studio
                to receive your private Gallery ID.
              </p>

            </div>

          </div>


          <div className="gallery-access-visual">

            <div className="visual-card">

              <span className="visual-number">
                01
              </span>

              <h2>
                One ID.
                <br />

                <span>
                  All your memories.
                </span>

              </h2>

              <p>
                Your photographs stay organized in one
                secure private gallery.
              </p>

            </div>

          </div>

        </section>

      ) : (

        /* =========================
           GALLERY
        ========================= */

        <section className="client-gallery-section">

          <div className="client-gallery-title">

            <div>

              <p className="section-tag">
                PRIVATE GALLERY
              </p>

              <h1>
                Your
                <span> Memories.</span>
              </h1>

              <p>
                Gallery ID: {galleryId}
              </p>

            </div>


            <div className="gallery-status">
              PRIVATE
            </div>

          </div>


          {/* Toolbar */}

          <div className="gallery-toolbar">

            <div>

              <strong>
                {photos.length}{" "}
                {photos.length === 1
                  ? "Photo"
                  : "Photos"}
              </strong>

              <span>
                Your memories
              </span>

            </div>

          </div>


          {/* Photo Grid */}

          <div className="client-photo-grid">

            {photos.map((photo) => (

              <div
                className="client-photo-card"
                key={photo.id}
                onClick={() =>
                  setSelectedPhoto(photo)
                }
              >

                <img
                  src={getPhotoUrl(photo)}
                  alt={photo.fileName}
                  className="client-real-photo"
                />


                <div className="client-photo-info">

                  <span>
                    {photo.fileName}
                  </span>


                  <button
                    className="view-photo-btn"
                    onClick={(event) => {

                      event.stopPropagation();

                      setSelectedPhoto(photo);

                    }}
                  >
                    View →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      )}


      {/* =========================
         PHOTO VIEWER MODAL
      ========================= */}

      {selectedPhoto && (

        <div
          className="photo-modal-overlay"
          onClick={() =>
            setSelectedPhoto(null)
          }
        >

          <div
            className="photo-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="photo-modal-close"
              onClick={() =>
                setSelectedPhoto(null)
              }
            >
              ×
            </button>


            <img
              src={getPhotoUrl(selectedPhoto)}
              alt={selectedPhoto.fileName}
              className="photo-modal-real-image"
            />


            <div className="photo-modal-footer">

              <div>

                <p>
                  PHOTO
                </p>

                <h2>
                  {selectedPhoto.fileName}
                </h2>

              </div>


              <button
                className="primary-btn"
                onClick={handleDownload}
              >
                Download Photo ↓
              </button>

            </div>

          </div>

        </div>

      )}

    </main>

  );
}

export default ClientGallery;