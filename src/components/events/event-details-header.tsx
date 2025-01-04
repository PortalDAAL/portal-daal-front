import { Box, List, ListItem, Typography } from "@mui/material";
import SubscribeButton from "../buttons/subscribe-button";
import { Event } from "../../models/Event";
import { getCompleteUrlFromImg, getFormattedDate } from "../../helpers";
import "./event-details-header.styles.css";

interface EventDetailsHeaderProps {
  eventData: Event;
  isUserLogged: boolean;
}

const EventDetailsHeader = ({
  eventData,
  isUserLogged,
}: EventDetailsHeaderProps): React.ReactElement => {
  return (
    <div className="container">
      <Box className="flex-row" sx={{ marginTop: 3, gap: "1rem" }}>
        <Box
          maxWidth={"50%"}
          component={"img"}
          src={getCompleteUrlFromImg(eventData.poster.url)}
          alt={"Foto do evento " + eventData.poster.name}
        ></Box>
        <Box
          className="flex-column"
          maxWidth={"50%"}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography variant="h2" className="event-title">
            {eventData.title}
          </Typography>
          <List sx={{ alignSelf: "start" }}>
            {eventData.startInscriptions && eventData.endInscriptions && (
              <ListItem disableGutters>
                <strong>Período de Inscrições</strong>:{" "}
                {getFormattedDate(eventData.startInscriptions)} até{" "}
                {getFormattedDate(eventData.endInscriptions)}{" "}
              </ListItem>
            )}
            <ListItem disableGutters>
              <strong>Data</strong>: {getFormattedDate(eventData.date)}{" "}
            </ListItem>
            <ListItem disableGutters>
              {" "}
              <strong>Vagas</strong>:{" "}
            </ListItem>
            <ListItem disableGutters>
              {" "}
              <strong>Valor</strong>:{" "}
            </ListItem>
            <ListItem disableGutters>
              {" "}
              <strong>Local</strong>: {eventData.place}{" "}
            </ListItem>
          </List>
          {isUserLogged && (
            <SubscribeButton
              label="Inscreva-se"
              variant="outlined"
              className="subscribe-event-btn"
            />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default EventDetailsHeader;
