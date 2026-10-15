export default function ArtistCard({ artist }) {
  return (
    <div className="artistCard">
      <img
        src={artist.image}
        alt={`${artist.name} profile`}
        className="artistImage"
      />
      <h3 className="artistName">{artist.name}</h3>
      <p className="artistGenre">{artist.genre}</p>
      <p className="artistBio">{artist.bio}</p>
    </div>
  );
}
