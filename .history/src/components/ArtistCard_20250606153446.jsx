import { useState } from 'react';

export default function ArtistCard({ artist }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="artistCard">
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
        <button 
          onClick={toggleFavorite}
          className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorited ? '\u2764\uFE0F Favorited' : 'U+1FA76 Favorite'}
        </button>
      </div>
      <p className="artistBio">{artist.bio}</p>
    </div>
  );
}