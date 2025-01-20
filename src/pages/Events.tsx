import React, { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import PageTitle from "../components/page-title/page-title";
import { Actions } from "../actions/actions";
import { Event } from "../models/Event";
import EventsSection from "../components/events/events-section";

const Events = (): React.ReactElement => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    Actions.getEvents()
      .then((events) => setEvents(events ?? [])) // o operador ?? diz que se events for nulo, use []
      .catch((err) => console.error(err));
  }, []);

  const openEvents: Event[] = events.filter((e) => e.active);
  const closedEvents: Event[] = events.filter((e) => !e.active);

  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <PageTitle text="Eventos" orientation="flex-start" />
      </Box>
      <Box marginTop={3}>
        <EventsSection title="Eventos abertos" data={openEvents} />
        <Divider sx={{ marginY: "3rem" }} />
        <EventsSection title="Eventos encerrados" data={closedEvents} />
      </Box>
    </div>
  );
};

export default Events;
