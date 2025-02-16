import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import "./event-card.styles.css";

interface EventCardProps {
  readonly id: string;
  title: string;
  date: string;
  isOpen?: boolean;
  imgUrl?: string;
  imgAltText?: string;
}

const EventCard = ({
  id,
  title,
  date,
  isOpen,
  imgUrl,
  imgAltText,
}: EventCardProps): React.ReactElement => {
  const theme = useTheme();

  const colorFont: string = isOpen ? "white" : theme.palette.primary.main;
  const route: string = routes.eventDetails.replace(":slug", id);

  return (
    <Link
      to={route}
      style={{
        textDecoration: "none",
        width: "32%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        className="card"
        sx={{
          bgcolor: isOpen ? theme.palette.primary.main : "white",
          borderRadius: 5,
          borderColor: isOpen ? "white" : theme.palette.primary.main,
        }}
      >
        <Box className="card-info">
          <Typography
            variant="h2"
            component="h3"
            sx={{
              fontSize: 24,
              fontWeight: "bold",
              color: colorFont,
            }}
          >
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: colorFont, mt: 1 }}>
            Data: {date}
          </Typography>
        </Box>
        <Box className="card-cover">
          <Avatar
            alt={imgAltText ?? "Foto do evento"}
            src={imgUrl}
            sx={{
              width: 128,
              height: 128,
            }}
          ></Avatar>
        </Box>
      </Box>
    </Link>
  );
};

export default EventCard;
