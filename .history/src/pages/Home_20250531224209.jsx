import concertImg from "../assets/concert.jpg";
export default function Home() {
  return <>
  <img src={concertImg} alt="Concert" className="homeImg" />
  <div className="container">
    <div className="intro">
      <h1>Music in Chicago</h1>
      <p>Whatever your taste in music, you can find it live in Chicago every night of the week, whether it's pop, indie rock, hip hop, punk, blues, or jazz.  From summer music festivals to iconic venues and small neighborhood bars, the city is known for its live music culture.  Every music enthusiast should visit Chicago, which is the birthplace of everything from house music to jazz and blues.</p>
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
