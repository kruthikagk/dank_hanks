import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/events", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat},${lon}&radius=20&apikey=YOUR_API_KEY`
    );

    const data = await response.json();

    const events = data._embedded?.events?.map(e => ({
      name: e.name,
      date: e.dates.start.localDate,
      venue: e._embedded.venues[0].name,
      url: e.url
    })) || [];

    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
