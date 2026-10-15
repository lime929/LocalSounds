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
      <h3 className="artistName">{artist.name}</h3>
      <p className="artistGenre">{artist.genre}</p>
      <button 
        onClick={toggleFavorite}
        className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
        aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg 
          className="heart-icon" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24"
        >
          <path
            fill={isFavorited ? '#ff3e3e' : '#999999'}
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
        {isFavorited ? ' Favorited' : ' Favorite'}
      </button>
      <p className="artistBio">{artist.bio}</p>
    </div>
  );
}