import { Box, SxProps, Typography, useTheme } from "@mui/material";
import "./event-details-section.styles.css";

interface EventDetailsSection {
  title: string;
  data: string;
  sx?: SxProps;
}

const EventDetailsSection = ({
  title,
  data,
  sx,
}: EventDetailsSection): React.ReactElement => {
  const theme = useTheme();
  // TODO: calcular essa distância direito pq jesus..
  // FIXME: isso aqui era pra usar aquele page-title mas nao dava pra usar da mesma maneira então repeti o código. temos que melhorar isso
  return (
    <Box sx={sx}>
      <Box
        className="flex-row"
        sx={{
          justifyContent: "flex-end",
          width: "325px",
          padding: "1rem",
          background: theme.palette.primary.main,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <Typography
          variant="h2"
          className="section-title"
          sx={{
            paddingLeft: "350px",
          }}
        >
          {title}
        </Typography>
      </Box>
      <div className="container" style={{ marginTop: 20 }}>
        <Typography variant="body1">{data}</Typography>
      </div>
    </Box>
  );
};

export default EventDetailsSection;
