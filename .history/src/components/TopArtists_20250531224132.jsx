import { topArtists } from "../data";

export default function TopArtists() {
    return (
     <>
      <div className="homepage-section">
      <section className="top-artists">
        <h2>Top Artists</h2>
        <div className="artist-grid">
          {topArtists.map((artist, index) => (
            <div className="artist-card" key={index}>
              <img src={artist.image} alt={`${artist.name}`} />
              <h3>{artist.name}</h3>
              <p>{artist.genre}</p>
            </div></>
    );
}
