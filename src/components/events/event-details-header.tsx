import { Box, List, ListItem, Typography } from "@mui/material";
import SubscribeButton from "../buttons/subscribe-button";
import { Event } from "../../models/Event";
import { getCompleteUrlFromImg, getFormattedDate } from "../../helpers";
import "./event-details-header.styles.css";

interface EventDetailsHeaderProps {
  event: Event;
  isUserLogged: boolean;
}

const EventDetailsHeader = ({
  event,
  isUserLogged,
}: EventDetailsHeaderProps): React.ReactElement => {
  return (
    <div className="container">
      <Box className="flex-row header-wrapper" sx={{ marginY: 3, gap: "1rem" }}>
        {
          event.poster && (
            <img
              className="header-img"
              style={{ maxWidth: "50%" }}
              src={getCompleteUrlFromImg(event.poster.url)}
              alt={"Foto do evento " + event.poster.name}
            ></img>
          ) /* : (
          <Skeleton
            className="header-img"
            variant="rounded"
            animation={false}
            height={190}
          />
        ) */
        }
        <Box className="flex-column header-info">
          <Typography variant="h2" className="event-title">
            {event.title}
          </Typography>
          <List className="header-info-list">
            {event.startInscriptions && event.endInscriptions && (
              <ListItem disableGutters>
                <strong>Período de Inscrições</strong>:{" "}
                {getFormattedDate(event.startInscriptions)} até{" "}
                {getFormattedDate(event.endInscriptions)}{" "}
              </ListItem>
            )}
            <ListItem disableGutters>
              <strong>Data</strong>: {getFormattedDate(event.date)}{" "}
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
              <strong>Local</strong>: {event.place}{" "}
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
