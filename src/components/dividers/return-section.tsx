import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../constants";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

interface ReturnSectionProps {
  linkText: string;
  previousPageLink: string;
}

const ReturnSection = ({
  linkText,
  previousPageLink,
}: ReturnSectionProps): React.ReactElement => {
  return (
    <Box className="flex-column">
      <Link
        className="no-decoration"
        to={previousPageLink}
        style={{ color: colors.darkBlue }}
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
