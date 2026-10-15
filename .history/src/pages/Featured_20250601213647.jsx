import featuredImg from "../assets/featured.jpg";

export default function Featured() {
  return <>
  <img src={featuredImg} alt="Featured" className="homeImg" />
  <div className="container">

    <div className="homeArtists">
    <h2>Featured Events</h2>
        
    </div>
    <div className="homeEvents">
    <h2>Featured Artists</h2>
       
    </div>
  </div>
  </>
}
