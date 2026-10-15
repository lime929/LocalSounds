import aboutImg from "../assets/about.jpg";
import TopArtists from "../components/TopArtists";
import LatestEvents from "../components/LatestEvents";
export default function About() {
  return <>
  <img src={aboutImg} alt="About" className="homeImg" />
  <div className="container">
    <div className="intro">
    <h1>About Local Sounds</h1>
        <p>
          Local Sounds is a organization dedicated to uplifting Chicago's diverse music culture by supporting local, independent artists and spotlighting upcoming music events throughout the city. Our mission is to give talented and often overlooked musicians the visibility they deserve while making it easier for fans to discover new sounds in their own neighborhood.
        </p>
        <p>
          Whether you're into indie rock, hip hop, jazz, or electronic music, our site helps you stay connected with Chicago's evolving music scene. We believe in building community through creativity, passion, and the power of live music.
        </p>
    </div>

    <div className="homeArtists">
      <h2>Featured Artists</h2>
      <p>Check out our featured artists and join us for a night of music and fun!</p>
    <TopArtists />
    </div>
    <div className="homeEvents">
      <h2>Featured Events</h2>
    <p>Check out our upcoming events and join us for a night of music and fun!</p>
    <LatestEvents />
    </div>
  </div>
  </>
}
