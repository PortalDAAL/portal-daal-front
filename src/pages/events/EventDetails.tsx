import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Actions } from "../../actions/actions";
import { Event } from "../../models/Event";
import ReturnSection from "../../components/dividers/return-section";
import { routes } from "../../constants";
import { Typography } from "@mui/material";
import { useUser } from "../../UserContext";
import EventDetailsSection from "../../components/events/event-details-section";
import EventDetailsHeader from "../../components/events/event-details-header";

const EventDetails = (): React.ReactElement => {
  const { id } = useParams();
  const { user } = useUser();
  const [event, setEvent] = useState<Event | null>();

  useEffect(() => {
    Actions.getEvent(id ?? "")
      .then((event) => setEvent(event))
      .catch((err) => console.error(err));
  }, [id]);

  // TODO: criar componentes!!!!!
  // a classe container só está marcando os elementos que devem ter um espaço das bordas da página
  // ela deveria marcar toda a página. contudo, como tem esses titulos de seções que devem
  // estar colados (como "Descrição"), ai to limitando somente em algumas áreas
  return (
    <>
      <div className="container">
        <ReturnSection
          linkText="Voltar aos eventos"
          previousPageLink={routes.events}
        />
      </div>
      {event ? (
        <>
          <EventDetailsHeader eventData={event} isUserLogged={user != null} />
          <EventDetailsSection
            title={"Descrição"}
            data={event.description}
            sx={{ marginBottom: 5 }}
          />
          <EventDetailsSection
            title={"Observações"}
            data={event.description}
            sx={{ marginY: 5 }}
          />
        </>
      ) : (
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Não há evento cadastrado.{" "}
        </Typography>
      )}
    </>
  );
};

export default EventDetails;
