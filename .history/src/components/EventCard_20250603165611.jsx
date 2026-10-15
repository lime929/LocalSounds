export default function EventCard({ event }) {
    return (
      <div className="artistCard"> {/* Consider renaming this class to eventCard for clarity */}
        <img
          src={event.image}
          alt={event.imageAltText || `${event.title} event image`} // Use imageAltText or event title
          className="artistImage" // Consider renaming this class if it's specific to events
        />
        <h3 className="artistName">{event.title}</h3> {/* Changed from event.name */}
        <p className="artistGenre">{event.date} - {event.location}</p> {/* Changed from event.genre, displays date and location */}
        <p className="artistBio">{event.description}</p> {/* Changed from event.bio */}
      </div>
    );
  }
  