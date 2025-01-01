import { useEffect, useState } from "react";
import { Actions } from "../../actions/actions";
import { Event } from "../../models/Event";
import { Box, Divider, Typography } from "@mui/material";
import EventCard from "./event-card";
import { getFormattedDate } from "../../helpers";
import { api } from "../../constants";

const EventsSection = ({ title, data }: { title: string; data: Event[] }) => {
  const hasEvents: boolean = data && data.length > 0;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography fontSize={24} marginBottom={"1rem"}>
        {title}
      </Typography>

      {hasEvents
        ? data.map((ev: Event) => {
            const imgUrl: string =
              api.base.replace("/api/", "") + ev.poster.url;
            return (
              <EventCard
                key={ev.id}
                title={ev.title}
                isOpen={ev.active}
                date={getFormattedDate(ev.date)}
                imgUrl={imgUrl}
                imgAltText={"Foto do evento " + ev.title}
              />
            );
          })
        : "Não há eventos por agora."}
    </Box>
  );
};

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
    <>
      <EventsSection title="Eventos abertos" data={openEvents} />
      <Divider sx={{ marginY: "3rem" }} />
      <EventsSection title="Eventos fechados" data={closedEvents} />
    </>
  );
};

export default EventsList;
