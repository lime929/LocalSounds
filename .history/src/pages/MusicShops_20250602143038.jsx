import musicImg from "../assets/music.jpg";
import { shops } from "../data";
export default function MusicShops() {
  return (
    <>
      <img src={musicImg} alt="Music Store" className="homeImg" />
      <div className="artists-page">
        <h2>Local Music Shops</h2>
        <p>
          Check out local music stores that sell Vinyl, CDs, and other music
          gear!
        </p>
        <div className="artists-grid">
          {artists.map((shops) => (
            <MusicShops key={shops.id} shops={shops} />
          ))}
        </div>
      </div>
    </>
  );
}
