import React, { useEffect, useState } from "react";
import { Event } from "../models/Event";
import { Box, Button } from "@mui/material";
import { Actions } from "../actions/actions";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext";

const Events = (): React.ReactElement => {
  const { user } = useUser();
  const [events, setEvents] = useState<Event[]>([]);

  // O useEffect faz com que assim que a página seja carregada ele busque no Strapi os eventos
  useEffect(() => {
    Actions.getEvents()
      .then((events) => setEvents(events ?? [])) // o operador ?? diz que se events for nulo, use []
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {user && (
        <>
          <Link to={"/addEvent"}>
            <Button> Cadastrar Evento </Button>
          </Link>
        </>
      )}

      {events.map((e: Event) => (
        <Box key={e.id}>
          {e.title} - {e.description} - {e.date.toString()}
        </Box>
      ))}
    </>
  );
};

export default Events;
