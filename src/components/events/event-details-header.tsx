import { Box, List, ListItem, Typography } from "@mui/material";
import SubscribeButton from "../buttons/subscribe-button";
import { Event } from "../../models/Event";
import {
  getCompleteUrlFromImg,
  getFormattedDate,
  hasValidDate,
} from "../../helpers";
import "./event-details-header.styles.css";

interface EventDetailsHeaderProps {
  event: Event;
  isUserLogged: boolean;
}

const EventDetailsHeader = ({
  event,
  isUserLogged,
}: EventDetailsHeaderProps): React.ReactElement => {
  const isEndDateNotPassed: boolean = hasValidDate(event.end_inscriptions);
  const isDateNotPassed: boolean = hasValidDate(event.date);

  const isEventAvailable: boolean =
    (isEndDateNotPassed || isDateNotPassed) && event.active;

  return (
    <div className="container">
      <Box className="flex-row header-wrapper" sx={{ marginY: 3 }}>
        {event.poster && (
          <img
            className="header-img"
            style={{ maxWidth: "50vw" }}
            src={getCompleteUrlFromImg(event.poster.url)}
            alt={"Foto do evento " + event.poster.name}
          ></img>
        )}
        <Box className="flex-column header-info">
          <Typography variant="h2" className="event-title">
            {event.title}
          </Typography>
          <List className="header-info-list">
            <ListItem disableGutters>
              <strong>Apresentadores</strong>: {event.presenters}
            </ListItem>
            {event.start_inscriptions && event.end_inscriptions && (
              <ListItem disableGutters>
                <strong>Período de Inscrições</strong>:{" "}
                {getFormattedDate(event.start_inscriptions)} até{" "}
                {getFormattedDate(event.end_inscriptions)}{" "}
              </ListItem>
            )}
            <ListItem disableGutters>
              <strong>Data</strong>: {getFormattedDate(event.date)}{" "}
            </ListItem>
            <ListItem disableGutters>
              <strong>Vagas</strong>: {event.limit_inscriptions}
            </ListItem>
            <ListItem disableGutters>
              <strong>Valor</strong>: R$ {event.price ?? "0.00"}
            </ListItem>
            <ListItem disableGutters>
              <strong>Local</strong>: {event.place}
            </ListItem>
          </List>
          {isUserLogged && isEventAvailable && (
            <SubscribeButton
              label="Inscreva-se"
              eventId={event.documentId}
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
