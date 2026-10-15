import logoImg from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="myFooter">
      <div className="footer-title">
        <img src={logoImg} alt="Logo" className="logoImg" />
        <div>
          <h3>Local Sounds Chicago</h3>
          <p>Bring Music, Culture & a good time to the community since 2015.</p>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Local Sounds Chicago. All rights
        reserved.
      </p>
      <img src={logoImg} alt="Logo" className="logoImg" />

    </footer>
  );
}
