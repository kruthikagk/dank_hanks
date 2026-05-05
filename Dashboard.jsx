<div className="events-container">
  {events.map((event, index) => (
    <div key={index} className="event-card">
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.venue}</p>

      <a href={event.url} target="_blank" rel="noreferrer">
        View Event
      </a>
    </div>
  ))}
</div>
