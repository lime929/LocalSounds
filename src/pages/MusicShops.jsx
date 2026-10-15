import musicImg from "../assets/music.jpg";
import Shops from "../components/Shops";
import { shops } from "../data";

export default function MusicShops() {
  return (
    <div className="shops-page">
      <div className="img-overlay">
        <img 
          src={musicImg} 
          alt="Vinyl records and a wall decorated with cassettes" 
          className="homeImg" 
        />
        <div className="text-img">
          <h1>Chicago's Best Music Shops</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="intro">
          <h1>Local Music Shops</h1>
          <p>
            Discover Chicago's finest record stores and music shops. From rare vinyl finds to the latest gear, 
            these local businesses are the heart of Chicago's music community. Whether you're a musician looking 
            for equipment or a collector searching for that special record, you'll find what you need at these 
            beloved local establishments.
          </p>
        </div>

        <section className="homeArtists">
          <h2>Featured Music Shops</h2>
          <p>Check out these local music stores that sell vinyl, CDs, instruments, and more!</p>
          <div className="artists-grid">
            {shops.map((shop) => (
              <Shops key={shop.id} shop={shop} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}