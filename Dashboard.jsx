import { useEffect, useState } from "react";

const [events, setEvents] = useState([]);

useEffect(() => {
  navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    fetch(`http://localhost:5000/events?lat=${lat}&lon=${lon}`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  });
}, []);
