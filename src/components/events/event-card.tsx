import { Avatar, Box, Typography } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          bgcolor: isOpen ? "white" : colors.primary,
          border: "3px solid",
          borderRadius: 5,
          borderColor: isOpen ? colors.darkBlue : "white",
          height: "10rem",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "2rem",
          }}
        >
          <Typography
            variant="h2"
            fontSize={24}
            component="h3"
            fontWeight={"bold"}
            color={colors.darkBlue}
          >
            {title}
          </Typography>
          <Typography variant="subtitle1" color={colors.darkBlue} marginTop={1}>
            Data: {date}
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: 1,
            marginRight: "1rem",
          }}
        >
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
