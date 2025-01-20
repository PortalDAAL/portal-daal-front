import React, { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import PageTitle from "../components/page-title/page-title";
import { Actions } from "../actions/actions";
import { Event } from "../models/Event";
import EventsSection from "../components/events/events-section";
import { hasValidDate } from "../helpers";

const Events = (): React.ReactElement => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    Actions.getEvents()
      .then((events) => setEvents(events ?? []))
      .catch((err) => console.error(err));
  }, []);

  const openEvents: Event[] = events.filter((e) => hasValidDate(e.date));
  const closedEvents: Event[] = events.filter((e) => !hasValidDate(e.date));

  return (
    <div>
      <PageTitle
        text="Eventos"
        urlImage="src/images/fundo_titulo_events1.jpeg"
      />
      <Box marginTop={3}>
        <EventsSection title="Eventos abertos" data={openEvents} />
        <Divider sx={{ marginY: "3rem" }} />
        <EventsSection title="Eventos encerrados" data={closedEvents} />
      </Box>
    </div>
  );
};

export default Events;
