import logoImg from "../assets/logo2.jpg";

const description = [
  "Located in the Lincoln Park neighborhood of Chicago, Meow & Macchiato Cafe is more than just a coffee shop, it's a place for cat lovers. Guests can our skillfully crafted drinks while enjoying the company of our loving felines. Whether you're winding down with a creamy cappuccino, enjoying a book, or trying a pawberry muffin you can be beside our cuddly cats. All of our cats are adoptable, and our space also acts as a foster home for local rescues. Come for the coffee, stay for the cats, and you could leave with a new best friend!",
];
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
        <p className="description">{description}</p>
      </header>
    </>
  );
}
