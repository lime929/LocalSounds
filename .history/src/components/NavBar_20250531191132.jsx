import logoImg from "../assets/logo2.jpg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <Link to="/">Local Sounds</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/artists">Artists</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
