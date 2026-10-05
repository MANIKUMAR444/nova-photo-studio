import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";

function Gallery() {

  /* ==============================
     CENTER IMAGE
  ============================== */

  const [selectedImage, setSelectedImage] = useState(gallery1);
  const [selectedIndex, setSelectedIndex] = useState(0);


  /* ==============================
     ORBIT IMAGES
  ============================== */

  const orbitImages = [
    {
      image: gallery1,
      alt: "Wedding photography"
    },
    {
      image: gallery2,
      alt: "Portrait photography"
    },
    {
      image: gallery3,
      alt: "Event photography"
    },
    {
      image: gallery4,
      alt: "Couple photography"
    },
    {
      image: gallery1,
      alt: "Wedding photography"
    },
    {
      image: gallery2,
      alt: "Portrait photography"
    },
    {
      image: gallery3,
      alt: "Event photography"
    },
    {
      image: gallery4,
      alt: "Couple photography"
    }
  ];


  /* ==============================
     AUTOMATIC IMAGE CHANGE
     EVERY 3 SECONDS
  ============================== */

  useEffect(() => {

    const interval = setInterval(() => {

      setSelectedIndex((previousIndex) => {

        const nextIndex =
          (previousIndex + 1) % 4;

        setSelectedImage(
          orbitImages[nextIndex].image
        );

        return nextIndex;

      });

    }, 3000);


    return () => {
      clearInterval(interval);
    };

  }, []);


  /* ==============================
     CATEGORY FILTER
  ============================== */

  const [activeCategory, setActiveCategory] =
    useState("all");


  const galleryItems = [

    {
      id: 1,
      category: "weddings",
      label: "WEDDINGS",
      title: "Forever Begins Here.",
      placeholder: "WEDDING",
      size: "gallery-large"
    },

    {
      id: 2,
      category: "portraits",
      label: "PORTRAITS",
      title: "Stories in Every Face.",
      placeholder: "PORTRAIT",
      size: ""
    },

    {
      id: 3,
      category: "events",
      label: "EVENTS",
      title: "Celebrate Every Moment.",
      placeholder: "EVENT",
      size: ""
    },

    {
      id: 4,
      category: "events",
      label: "SPECIAL MOMENTS",
      title: "Memories Worth Keeping.",
      placeholder: "MEMORIES",
      size: "gallery-wide"
    },

    {
      id: 5,
      category: "portraits",
      label: "FAMILY",
      title: "Together is Everything.",
      placeholder: "FAMILY",
      size: ""
    },

    {
      id: 6,
      category: "portraits",
      label: "COUPLES",
      title: "Your Story, Your Moment.",
      placeholder: "LOVE",
      size: ""
    }

  ];


  const filteredGalleryItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category === activeCategory
        );


  /* ==============================
     PAGE
  ============================== */

  return (

    <main className="public-page">


      {/* ==============================
          HEADER
      ============================== */}

      <header className="public-header">

        <Link
          to="/"
          className="public-logo"
        >
          NO<span>VA</span>
        </Link>


        <nav className="public-nav">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link
            to="/gallery"
            className="active"
          >
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



      {/* ==============================
          ORBIT GALLERY
      ============================== */}

      <section className="public-gallery">


        <div className="gallery-heading">

          <p className="section-tag">
            OUR WORK
          </p>


          <h1>
            Stories captured.
            <span>
              {" "}Memories preserved.
            </span>
          </h1>


          <p>
            Explore our collection of beautiful
            moments. Click any image around the
            circle to view it in the center.
          </p>

        </div>



        <div className="orbit-gallery">


          {/* ==========================
              CENTER SQUARE
          ========================== */}

          <div className="orbit-center">

            <img
              src={selectedImage}
              alt="Selected NOVA photography"
            />

          </div>



          {/* ==========================
              ROTATING CIRCLE
          ========================== */}

          <div className="orbit-ring">


            {orbitImages.map(
              (item, index) => (

                <button
                  key={index}

                  className={`orbit-item orbit-item-${index + 1} ${
                    selectedIndex === index
                      ? "selected"
                      : ""
                  }`}

                  onClick={() => {

                    setSelectedImage(
                      item.image
                    );

                    setSelectedIndex(
                      index
                    );

                  }}

                  aria-label={
                    `View ${item.alt}`
                  }
                >

                  <img
                    src={item.image}
                    alt={item.alt}
                  />

                </button>

              )
            )}

          </div>

        </div>

      </section>



      {/* ==============================
          GALLERY HERO
      ============================== */}

      <section className="gallery-hero">

        <p className="section-tag">
          OUR WORK
        </p>


        <h1>

          Moments captured.

          <br />

          <span>
            Stories preserved.
          </span>

        </h1>


        <p>

          Explore a selection of moments
          captured by NOVA —
          from weddings and celebrations
          to portraits and unforgettable
          memories.

        </p>

      </section>



      {/* ==============================
          GALLERY CATEGORIES
      ============================== */}

      <section className="gallery-categories">


        <button
          className={`gallery-category ${
            activeCategory === "all"
              ? "active"
              : ""
          }`}

          onClick={() =>
            setActiveCategory("all")
          }
        >
          All Work
        </button>



        <button
          className={`gallery-category ${
            activeCategory === "weddings"
              ? "active"
              : ""
          }`}

          onClick={() =>
            setActiveCategory("weddings")
          }
        >
          Weddings
        </button>



        <button
          className={`gallery-category ${
            activeCategory === "events"
              ? "active"
              : ""
          }`}

          onClick={() =>
            setActiveCategory("events")
          }
        >
          Events
        </button>



        <button
          className={`gallery-category ${
            activeCategory === "portraits"
              ? "active"
              : ""
          }`}

          onClick={() =>
            setActiveCategory("portraits")
          }
        >
          Portraits
        </button>

      </section>



      {/* ==============================
          GALLERY GRID
      ============================== */}

      <section className="gallery-grid">


        {filteredGalleryItems.map(
          (item) => (

            <div
              key={item.id}
              className={`gallery-item ${item.size}`}
            >

              <div className="gallery-placeholder">
                {item.placeholder}
              </div>


              <div className="gallery-overlay">

                <p>
                  {item.label}
                </p>

                <h3>
                  {item.title}
                </h3>

              </div>

            </div>

          )
        )}

      </section>



      {/* ==============================
          DIGITAL GALLERY FEATURE
      ============================== */}

      <section className="gallery-access-section">


        <div className="gallery-access-text">

          <p className="section-tag">
            ALREADY A NOVA CLIENT?
          </p>


          <h2>

            Your photos are

            <br />

            <span>
              waiting for you.
            </span>

          </h2>


          <p>

            Enter your unique Gallery ID
            to access, view and download
            your personal photographs
            securely from anywhere.

          </p>

        </div>



        <Link
          to="/client-gallery"
          className="gallery-access-card"
        >

          <div className="gallery-id-icon">
            NV
          </div>


          <div>

            <p>
              CLIENT ACCESS
            </p>


            <h3>
              Open Your Gallery →
            </h3>

          </div>

        </Link>

      </section>



      {/* ==============================
          CTA
      ============================== */}

      <section className="about-cta">


        <p className="section-tag">
          READY TO CREATE YOUR STORY?
        </p>


        <h2>

          Let's capture

          <span>
            {" "}something beautiful.
          </span>

        </h2>


        <Link
          to="/contact"
          className="primary-btn"
        >
          Book a Session →
        </Link>

      </section>



      {/* ==============================
          FOOTER
      ============================== */}

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


export default Gallery;