import concertImg from "../assets/concert.jpg";
export default function Home() {
  return <>
  <img src={concertImg} alt="Concert" className="homeImg" />
  <div className="container">
    <h1>Music in Chicago</h1>

    <div className="homeEvents">
      <h2>Featured Events</h2>
      <p>Check out our upcoming events and join us for a night of music and fun!</p>
    </div>
  </div>
  </>
}
