import { useState } from 'react';

export default function EventCard({ event }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="eventCard">
      <img
        src={event.image}
        alt={`${event.title} event`}
        className="eventImage"
      />
      <div className="event-header">
        <div className="event-info">
          <h3 className="eventTitle">{event.title}</h3>
          <p className="eventDate">{event.date} • {event.location}</p>
        </div>
        <button 
          onClick={toggleFavorite}
          className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorited ? '❤️ Saved' : '\u{1FA76} Save Event'}
        </button>
      </div>
      <p className="eventDescription">{event.description}</p>
    </div>
  );
}