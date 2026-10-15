import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
   <>
    <section className="banner">
      <p>Come and join us for a night of music and fun!</p>
    </section>
    <nav className="navbar">
      <div className="navbarLogo">
        <Link to="/">
          Local Sounds
          <img src={logoImg} alt="Local Sounds Logo" className="logoImg" />
        </Link>
      </div>
      <ul className="navbarLinks">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/artists">Artists</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/featured">Featured</Link>
        </li>
      </ul>
    </nav></>
  );
}
