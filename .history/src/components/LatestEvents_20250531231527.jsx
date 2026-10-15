import { latestEvents } from "../data";

export default function LatestEvents() {
    return (
      <>
           <section className="latest-events">
        <ul className="event-list">
          {latestEvents.map((event, index) => (
            <li key={index} className="event-card">
              <h3>{event.title}</h3>
              <img src={event.image} alt={`${event.title}`} />
              <p>{event.date}</p>
              <p>{event.location}</p>
            </li>
          ))}
        </ul>
      </section></>
    );
}
