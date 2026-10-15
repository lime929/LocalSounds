import EventCard from "../components/EventCard";
import { events } from "../data";
import CountdownTimer from '../components/CountdownTimer';

export default function Events() {
  const eventDate = new Date(2025, 5, 13, 20, 0);

  return (
    <div className="events-page">
      <CountdownTimer eventDate={eventDate} />

      <h1>Local Events</h1>
      <p>Check out our featured events and join us for a night of music and fun!</p>
      
      <div className="events-grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}