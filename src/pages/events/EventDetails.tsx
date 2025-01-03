import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Actions } from "../../actions/actions";
import { Event } from "../../models/Event";
import ReturnSection from "../../components/dividers/return-section";
import { colors, routes } from "../../constants";
import { Box, List, ListItem, Typography } from "@mui/material";
import { getCompleteUrlFromImg, getFormattedDate } from "../../helpers";
import SubscribeButton from "../../components/buttons/subscribe-button";
import "./EventDetails.styles.css";
import { useUser } from "../../UserContext";

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
  return (
    <div className="container">
      <ReturnSection
        linkText="Voltar aos eventos"
        previousPageLink={routes.events}
      />
      {event ? (
        <>
          <Box className="flex-row" sx={{ marginTop: 3, gap: "1rem" }}>
            <Box
              maxWidth={"50%"}
              component={"img"}
              src={getCompleteUrlFromImg(event.poster.url)}
            ></Box>
            <Box
              className="flex-column"
              maxWidth={"50%"}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography
                alignSelf={"center"}
                variant="h2"
                textTransform={"uppercase"}
                color={colors.darkBlue}
                fontWeight={"bold"}
                fontSize={28}
              >
                {event.title}
              </Typography>
              <List sx={{ alignSelf: "start" }}>
                {event.startInscriptions && event.endInscriptions && (
                  <ListItem>
                    Período de Inscrições:{" "}
                    {getFormattedDate(event.startInscriptions)} até{" "}
                    {getFormattedDate(event.endInscriptions)}{" "}
                  </ListItem>
                )}
                <ListItem> Data: {getFormattedDate(event.date)} </ListItem>
                <ListItem> Vagas: </ListItem>
                <ListItem> Valor: </ListItem>
                <ListItem> Local: {event.place} </ListItem>
              </List>
              {user && (
                <SubscribeButton
                  label="Inscreva-se"
                  variant="outlined"
                  className="subscribe-event-btn"
                />
              )}
            </Box>
          </Box>
        </>
      ) : (
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Não há evento cadastrado.{" "}
        </Typography>
      )}
    </div>
  );
};

export default EventDetails;
