import { topArtists } from "../data";

export default function TopArtists() {
    return (
     <>
      <div className="homepage-section">
      <section className="top-artists">
        <div className="artist-list">
          {topArtists.map((artist, index) => (
            <div className="artist-card" key={index}>
            <h3>{artist.name}</h3>
              <img src={artist.image} alt={`${artist.name}`} />
              <p>{artist.genre}</p>
              <p>{artist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
    );
}
