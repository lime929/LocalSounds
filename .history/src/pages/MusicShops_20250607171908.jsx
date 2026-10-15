import musicImg from "../assets/music.jpg";
import Shops from "../components/Shops";
import { shops } from "../data"; 

export default function MusicShops() {
  return (
    <>
    <div className="img-overlay">
      <img src={musicImg} alt="https://www.pexels.com/photo/vinyl-records-and-a-wall-decorated-with-cassettes-14577621/
" className="homeImg" />
</div>
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