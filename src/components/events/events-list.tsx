import { useEffect, useState } from "react";
import { Actions } from "../../actions/actions";
import { Event } from "../../models/Event";
import { Box, Divider } from "@mui/material";
import EventsSection from "./events-section";

const EventsList = (): React.ReactElement => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    Actions.getEvents()
      .then((events) => setEvents(events ?? [])) // o operador ?? diz que se events for nulo, use []
      .catch((err) => console.error(err));
  }, []);

  const openEvents: Event[] = events.filter((e) => e.active);
  const closedEvents: Event[] = events.filter((e) => !e.active);

  return (
    <Box marginTop={3}>
      <EventsSection title="Eventos abertos" data={openEvents} />
      <Divider sx={{ marginY: "3rem" }} />
      <EventsSection title="Eventos fechados" data={closedEvents} />
    </Box>
  );
};

export default EventsList;
