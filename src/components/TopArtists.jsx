import { topArtists } from "../data";

export default function TopArtists() {
  return (
    <div className="artists-grid">
      {topArtists.map((artist) => (
        <div className="artistCard" key={artist.id}>
          <img
            src={artist.image}
            alt={`${artist.name} profile`}
            className="artistImage"
          />
          <div className="artist-header">
            <div className="artist-info">
              <h3 className="artistName">{artist.name}</h3>
              <p className="artistGenre">{artist.genre}</p>
            </div>
          </div>
          <p className="artistBio">{artist.description}</p>
        </div>
      ))}
    </div>
  );
}
