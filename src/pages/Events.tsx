import constants from "../constants";
import React, { useEffect, useState } from "react";
import { Event } from "../interfaces/Event";
import { Box } from "@mui/material";

declare interface PresentationProps {
  items: Event[];
}

const Events = (): React.ReactElement => {
  const [events, setEvents] = useState<Event[]>([]);
  // O useEffect faz com que assim que a página seja carregada ele busque no Strapi os eventos
  useEffect(() => {
    fetch(constants.api.events.url) // fetch é a maneira que fazemos uma requisição HTTP à api
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data);
        console.log(data);
      });
  }, []);

  return <EventsPresentation items={events} />;
};

const EventsPresentation = ({
  items,
}: PresentationProps): React.ReactElement => {
  return (
    <>
      {items.map((e: Event) => (
        <Box key={e.id}>
          {e.title} - {e.description} - {e.date.toString()}
        </Box>
      ))}
    </>
  );
};

export default Events;
