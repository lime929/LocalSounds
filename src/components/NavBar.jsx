import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <section className="banner">
        <p>Come and join us for a night of music and fun!</p>
      </section>
      <nav className="navbar">
        <div className="navbarLogo">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <img src={logoImg} alt="Local Sounds Logo" className="logoImg" />
          <Link to="/" className="navbarLogoText">
            Local Sounds
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="navbar-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/artists" className={({ isActive }) => isActive ? 'active' : ''}>Artists</NavLink></li>
          <li><NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/musicshops" className={({ isActive }) => isActive ? 'active' : ''}>Music Shops</NavLink></li>
        </ul>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <button className="close-btn" onClick={closeMenu}>&times;</button>
            <ul>
              <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/artists" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Artists</NavLink></li>
              <li><NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Events</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink></li>
              <li><NavLink to="/musicshops" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Music Shops</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </nav>
    </>
  );
}
