import logoImg from "../assets/logo2.jpg";

export default function Header() {
  return (
    <>
      <header className="myHeader">
        <div className="header-title">
          <img src={logoImg} alt="Logo Img" className="logo" />
          <h1>Local Sounds Chicago</h1>
          <h2>
            Where people from all genres, cultures and places can come together
            and enjoy music.
          </h2>
        </div>
      </header>
    </>
  );
}
