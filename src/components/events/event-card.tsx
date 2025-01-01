import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../constants";

interface EventCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: any;
  title: string;
  date: string;
  isOpen?: boolean;
  imgUrl?: string;
  imgAltText?: string;
}

const EventCard = ({
  title,
  date,
  isOpen,
  imgUrl,
  imgAltText,
}: EventCardProps): React.ReactElement => {
  // TODO: criar arquivo .css para esses estilos
  return (
    <Link to={""} style={{ textDecoration: "none", width: "32%" }}>
      <Card
        elevation={0}
        sx={{
          display: "flex",
          bgcolor: isOpen ? "white" : colors.primary,
          border: "2px solid",
          borderRadius: "1%",
          borderColor: isOpen ? colors.darkBlue : "white",
          height: "10rem",
          justifyContent: "space-around",
          alignItems: "center",
          paddingX: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            component="h3"
            sx={{ fontWeight: "bold", fontSize: "18" }}
          >
            {title}
          </Typography>
          <Typography variant="subtitle1">Data: {date}</Typography>
        </Box>
        <CardMedia
          component="img"
          alt={imgAltText ?? "Foto do evento"}
          src={imgUrl}
          sx={{
            maxWidth: "10rem",
            maxHeight: "8rem",
            borderRadius: "30%",
          }}
        ></CardMedia>
      </Card>
    </Link>
  );
};

export default EventCard;
