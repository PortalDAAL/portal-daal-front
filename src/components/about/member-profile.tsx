import React from "react";
import { Avatar, Box } from "@mui/material";

interface MemberProfileProps {
  imgAltText: string;
  imgSrc?: string;
  role: string;
  name: string;
}

const MemberProfile: React.FC<MemberProfileProps> = ({ imgAltText, imgSrc, role, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginY: "2.5vh",
        width: "50%",
        paddingLeft: "10px",
      }}
    >
      <Avatar
        alt={imgAltText}
        src={imgSrc}
        sx={{ width: "60px", height: "60px" }}
      />
      <Box
        sx={{
          justifyContent: "center",
          marginLeft: "1vw",
        }}
        className="flex-column"
      >
        <Box
          sx={{
            fontWeight: "bold",
          }}
        >
          {role}
        </Box>
        <Box>{name}</Box>
      </Box>
    </Box>
  );
};

export default MemberProfile;
