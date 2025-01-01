import { Box } from "@mui/material";
import PageTitle from "../page-title/page-title";

const EventsTitle = (): React.ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <PageTitle text="Eventos" orientation="flex-start" />
    </Box>
  );
};

export default EventsTitle;
