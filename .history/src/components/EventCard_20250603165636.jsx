export default function EventCard({ event }) {
    return (
      <div className="artistCard"> {/* Consider renaming this class to eventCard for clarity */}
        <img
          src={event.image}
          alt={event.imageAltText || `${event.title} event image`} 
          className="artistImage" 
        />
        <h3 className="artistName">{event.title}</h3> 
        <p className="artistGenre">{event.date} - {event.location}</p>
        <p className="artistBio">{event.description}</p> 
      </div>
    );
  }
  