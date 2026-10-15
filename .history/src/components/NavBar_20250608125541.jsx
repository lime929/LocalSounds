import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="banner">
        <p>Come and join us for a night of music and fun!</p>
      </section>
      <nav className="navbar">
        <div className="navbarLogo">
          <span className="menu-toggle" onClick={toggleNav}>&#9776;</span>
          <img src={logoImg} alt="Local Sounds Logo" className="logoImg" />
          <Link to="/" className="navbarLogoText">
            Local Sounds
          </Link>
        </div>
        
        {/* Side nav */}
        <div className={`sidenav ${isOpen ? 'open' : ''}`}>
          <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
          <Link to="/" onClick={closeNav}>Home</Link>
          <Link to="/artists" onClick={closeNav}>Artists</Link>
          <Link to="/events" onClick={closeNav}>Events</Link>
          <Link to="/about" onClick={closeNav}>About</Link>
          <Link to="/musicshops" onClick={closeNav}>Music Shops</Link>
        </div>

        {/* overlay */}
        {isOpen && <div className="sidenav-overlay" onClick={closeNav}></div>}
      </nav>
    </>
  );
}
