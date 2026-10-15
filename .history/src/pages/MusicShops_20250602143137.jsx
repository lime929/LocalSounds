import musicImg from "../assets/music.jpg";
import Shops from "../components/Shops";
import { shops } from "../data";  // Make sure you have shops data in your data.js

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
          {shops.map((shop) => (
            <Shops key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </>
  );
}