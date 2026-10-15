import EventCard from "../components/EventCard";
import { events } from "../data";

export default function Events() {
  return (
      <div className="artists-page">
          <h1>Local Events</h1>
          <p>Check out our featured events and join us for a night of music and fun!</p>
          <div className="artists-grid">
              {events.map(event => (
                  <EventCard key={event.id} event={event} />
              ))}
          </div>
      </div>
  )
}