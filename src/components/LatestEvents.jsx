import { latestEvents } from "../data";

export default function LatestEvents() {
  return (
    <div className="events-grid">
      {latestEvents.map((event) => (
        <div className="eventCard" key={event.id}>
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
          </div>
          <p className="eventDescription">{event.description}</p>
        </div>
      ))}
    </div>
  );
}
