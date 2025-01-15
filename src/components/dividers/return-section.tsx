import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

interface ReturnSectionProps {
  linkText: string;
  previousPageLink: string;
}

const ReturnSection = ({
  linkText,
  previousPageLink,
}: ReturnSectionProps): React.ReactElement => {
  const theme = useTheme();

  return (
    <Box className="flex-column">
      <Link
        className="no-decoration"
        to={previousPageLink}
        style={{ color: theme.palette.primary.main }}
      >
        <div className="flex-row" style={{ marginBottom: 10, gap: 7 }}>
          <ArrowBackRoundedIcon />
          <Typography
            variant="body1"
            component="h6"
            sx={{ alignSelf: "center" }}
          >
            {linkText}
          </Typography>
        </div>
      </Link>
      <Divider />
    </Box>
  );
};

export default ReturnSection;
