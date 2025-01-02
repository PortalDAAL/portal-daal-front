import { Event } from "../../models/Event";
import { Box, Typography } from "@mui/material";
import EventCard from "./event-card";
import { getFormattedDate } from "../../helpers";
import { api, colors } from "../../constants";

interface EventsSectionProps {
  title: string;
  data?: Event[];
}

const EventsSection = ({ title, data }: EventsSectionProps) => {
  const hasEvents: boolean = data !== undefined && data.length > 0;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        component={"h2"}
        sx={{
          fontSize: 24,
          marginBottom: "1rem",
          textTransform: "uppercase",
          fontWeight: "bold",
          color: colors.darkBlue,
        }}
      >
        {title}
      </Typography>

      {hasEvents
        ? data?.map((ev: Event) => {
            const imgUrl: string =
              api.base.replace("/api/", "") + ev.poster.url;

            return (
              <EventCard
                id={ev.documentId}
                title={ev.title}
                isOpen={ev.active}
                date={getFormattedDate(ev.date)}
                imgUrl={imgUrl}
                imgAltText={"Foto do evento " + ev.title}
              />
            );
          })
        : "Não há eventos por agora."}
    </Box>
  );
};

export default EventsSection;
