import concertImg from "../assets/concert.jpg";
import TopArtists from "../components/TopArtists";
import LatestEvents from "../components/LatestEvents";

export default function Home() {
  return (
    <div className="home-page">
      <div className="img-overlay">
        <img 
          src={concertImg} 
          alt="Live music performance in Chicago" 
          className="homeImg" 
        />
        <div className="text-img">
          <h1>Experience Chicago's Music Scene</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="intro">
          <h1>Music in Chicago</h1>
          <p>
            Whatever your taste in music, you can find it live in Chicago every night of the week, 
            from pop and indie rock to hip hop, punk, blues, and jazz. Our city's vibrant music 
            scene spans summer festivals, iconic venues, and intimate neighborhood bars. As the 
            birthplace of house music, jazz, and blues, Chicago offers legendary acts and rising 
            local talent on stages across the city.
          </p>
        </div>

        <section className="homeArtists">
          <h2>Spotlight Artists</h2>
          <p>Discover the incredible talent that makes Chicago's music scene legendary</p>
          <TopArtists />
        </section>

        <section className="homeEvents">
          <h2>Upcoming Events</h2>
          <p>Find your next unforgettable night out with Chicago's best live music</p>
          <LatestEvents />
        </section>

        <div className="newsletter">
          <h2>Never Miss a Beat</h2>
          <p>Sign up for our newsletter to stay updated on the best live music in Chicago</p>
          <div className="form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
