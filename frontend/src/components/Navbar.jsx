import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        NO<span>VA </span> 
      </div>

      <nav className="nav-links">

  <Link to="/">Home</Link>

  <Link to="/about">About</Link>

  <Link to="/services">Services</Link>

  <Link to="/gallery">Gallery</Link>

  <Link to="/contact">Contact</Link>

  <Link to="/portal" className="portal-btn">
    Portal <span>⌄</span>
  </Link>

</nav>
    </header>
  );
}

export default Navbar;

