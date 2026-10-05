import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="public-header">

      <Link to="/" className="public-logo">
        NO<span>VA</span>
      </Link>

      <nav className="public-nav">

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>

        <Link
          to="/services"
          className={location.pathname === "/services" ? "active" : ""}
        >
          Services
        </Link>

        <Link
          to="/gallery"
          className={location.pathname === "/gallery" ? "active" : ""}
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
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
  );
}

export default Navbar;