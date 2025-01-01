import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext";
import EventsList from "../components/events/events-list";
import EventsTitle from "../components/events/events-title";

const Events = (): React.ReactElement => {
  const { user } = useUser();

  return (
    <div className="container">
      {user && (
        <>
          <Link to={"/addEvent"}>
            <Button> Cadastrar Evento </Button>
          </Link>
        </>
      )}
      <EventsTitle />

      <EventsList />
    </div>
  );
};

export default Events;
