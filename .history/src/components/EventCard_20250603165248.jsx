export default function EventCard({ event }) {
    return (
      <div className="artistCard">
        <img
          src={event.image}
          alt={`${event.name} profile`}
          className="artistImage"
        />
        <h3 className="artistName">{event.name}</h3>
        <p className="artistGenre">{event.genre}</p>
        <p className="artistBio">{event.bio}</p>
      </div>
    );
  }
  