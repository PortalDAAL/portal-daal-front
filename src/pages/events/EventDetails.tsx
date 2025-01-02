import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Actions } from "../../actions/actions";
import { Event } from "../../models/Event";

const EventDetails = (): React.ReactElement => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>();

  useEffect(() => {
    Actions.getEvent(id ?? "1")
      .then((event) => setEvent(event))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container">
      {event ? <> has this event: {event.title} </> : <> has no event </>}
    </div>
  );
};

export default EventDetails;
