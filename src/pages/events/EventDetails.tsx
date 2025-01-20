import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Actions } from "../../actions/actions";
import { Event } from "../../models/Event";
import ReturnSection from "../../components/dividers/return-section";
import { routes } from "../../constants";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useUser } from "../../UserContext";
import EventDetailsSection from "../../components/events/event-details-section";
import EventDetailsHeader from "../../components/events/event-details-header";

const EventDetails = (): React.ReactElement => {
  const { slug } = useParams();
  const { user } = useUser();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      Actions.getEvent(slug ?? "")
        .then((event) => {
          setEvent(event);
        })
        .catch((err) => console.error(err));
      setLoading(false);
    }, 500);
  }, [slug]);

  return (
    <>
      <div className="container">
        <ReturnSection
          linkText="Voltar aos eventos"
          previousPageLink={routes.events}
        />
      </div>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress size="4rem" />
        </Box>
      ) : (
        <>
          {event !== undefined && event !== null && !loading ? (
            <>
              <EventDetailsHeader event={event} isUserLogged={user != null} />
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
            <Typography
              variant="h2"
              sx={{
                marginTop: "3rem",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              Não há evento cadastrado.{" "}
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default EventDetails;
