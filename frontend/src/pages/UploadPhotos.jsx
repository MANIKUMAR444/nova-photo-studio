import { useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api";

function UploadPhotos() {

  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [error, setError] = useState("");

  // Get the gallery created in CreateGallery.jsx

  const storedGallery =
    localStorage.getItem("createdGallery");

  const gallery = storedGallery
    ? JSON.parse(storedGallery)
    : null;


  const handleFileChange = (event) => {

    const files = Array.from(event.target.files)
      .filter((file) =>
        file.type.startsWith("image/")
      );

    setSelectedPhotos((previousPhotos) => [
      ...previousPhotos,
      ...files
    ]);

    setError("");

  };


  const handleDrop = (event) => {

    event.preventDefault();

    const files = Array.from(event.dataTransfer.files)
      .filter((file) =>
        file.type.startsWith("image/")
      );

    setSelectedPhotos((previousPhotos) => [
      ...previousPhotos,
      ...files
    ]);

    setError("");

  };


  const removePhoto = (indexToRemove) => {

    setSelectedPhotos((previousPhotos) =>
      previousPhotos.filter(
        (_, index) => index !== indexToRemove
      )
    );

  };


  const handleUpload = async () => {

  if (!gallery) {

    setError(
      "No gallery selected. Please create a gallery first."
    );

    return;
  }


  if (selectedPhotos.length === 0) {

    setError(
      "Please select at least one photo."
    );

    return;
  }


  setError("");


  try {

    const formData = new FormData();

    formData.append(
      "galleryId",
      gallery.galleryId
    );


    selectedPhotos.forEach((photo) => {

      formData.append(
        "photos",
        photo
      );

    });


    const response = await fetch(
  `${API_URL}/api/photos/upload`,
  {
    method: "POST",
    body: formData
  }
);


    if (response.ok) {

      const savedPhotos =
        await response.json();

      alert(
        `${savedPhotos.length} photo(s) uploaded successfully.`
      );

      setSelectedPhotos([]);

    } else {

      const message =
        await response.text();

      setError(message);

    }

  } catch (error) {
  console.error("Upload error:", error);

  setError("Unable to connect to backend.");
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
            className="dashboard-nav-item"
          >
            <span>02</span>
            Create Gallery
          </Link>


          <Link
            to="/upload-photos"
            className="dashboard-nav-item active"
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
              PHOTO MANAGEMENT
            </p>

            <h1>
              Upload
              <span> Photos.</span>
            </h1>

            <p className="dashboard-subtitle">
              Add photographs to your client's private gallery.
            </p>

          </div>

        </div>


        {/* Error message */}

        {error && (

          <div
            style={{
              color: "#ff4d00",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px"
            }}
          >
            {error}
          </div>

        )}


        {/* Gallery Information */}

        {gallery ? (

          <div className="upload-gallery-info">

            <div>

              <p className="upload-info-label">
                UPLOADING TO GALLERY
              </p>

              <h2>
                {gallery.clientName}
                {" — "}
                {gallery.eventName}
              </h2>

            </div>


            <div className="upload-gallery-id">

              <span>
                GALLERY ID
              </span>

              <strong>
                {gallery.galleryId}
              </strong>

            </div>

          </div>

        ) : (

          <div className="upload-gallery-info">

            <div>

              <p className="upload-info-label">
                NO GALLERY SELECTED
              </p>

              <h2>
                Create a gallery first
              </h2>

            </div>

          </div>

        )}


        {/* Upload Area */}

        <div
          className="upload-drop-area"
          onDragOver={(event) =>
            event.preventDefault()
          }
          onDrop={handleDrop}
        >

          <div className="upload-icon">
            ↑
          </div>


          <h2>
            Drop your photos here
          </h2>


          <p>
            or select photos from your computer
          </p>


          <label className="upload-select-btn">

            Select Photos

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              hidden
            />

          </label>


          <span className="upload-limit">
            JPG, JPEG, PNG · Multiple photos supported
          </span>

        </div>


        {/* Selected Photos */}

        {selectedPhotos.length > 0 && (

          <div className="selected-photos-section">

            <div className="selected-photos-header">

              <div>

                <p className="section-tag">
                  SELECTED PHOTOS
                </p>

                <h2>
                  {selectedPhotos.length}{" "}
                  {selectedPhotos.length === 1
                    ? "Photo"
                    : "Photos"}
                </h2>

              </div>


              <button
                className="clear-photos-btn"
                onClick={() => setSelectedPhotos([])}
              >
                Clear All
              </button>

            </div>


            <div className="photo-preview-grid">

              {selectedPhotos.map((photo, index) => (

                <div
                  className="photo-preview"
                  key={`${photo.name}-${index}`}
                >

                  <img
                    src={URL.createObjectURL(photo)}
                    alt={photo.name}
                  />


                  <button
                    className="remove-photo-btn"
                    onClick={() =>
                      removePhoto(index)
                    }
                  >
                    ×
                  </button>


                  <div className="photo-name">
                    {photo.name}
                  </div>

                </div>

              ))}

            </div>


            <div className="upload-actions">

              <Link
                to="/photographer-dashboard"
                className="cancel-btn"
              >
                Cancel
              </Link>


              <button
                className="primary-btn"
                onClick={handleUpload}
              >
                Upload{" "}
                {selectedPhotos.length}{" "}
                {selectedPhotos.length === 1
                  ? "Photo"
                  : "Photos"}{" "}
                →
              </button>

            </div>

          </div>

        )}

      </section>

    </main>

  );
}

export default UploadPhotos;