import React from "react";
import EventsList from "../components/events/events-list";
import EventsTitle from "../components/events/events-title";

const Events = (): React.ReactElement => {
  return (
    <div className="container">
      <EventsTitle />
      <EventsList />
    </div>
  );
};

export default Events;
