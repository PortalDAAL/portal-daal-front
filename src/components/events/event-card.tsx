import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../constants";
import "./event-card.styles.css";

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
  const colorFont: string = isOpen ? colors.darkBlue : "white";

  return (
    <Link
      to={""}
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
          bgcolor: isOpen ? "white" : colors.primary,
          borderRadius: 5,
          borderColor: isOpen ? colors.darkBlue : "white",
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
