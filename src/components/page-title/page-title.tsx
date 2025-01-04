import { Box, Typography } from "@mui/material";
import { colors } from "../../constants";

type PageTitleOrientation = "flex-start" | "flex-end";

interface PageProps {
  text: string;
  orientation: PageTitleOrientation;
}

const PageTitle = ({ text, orientation }: PageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: orientation,
        backgroundColor: colors.darkBlue,
        borderRadius: "20px",
        paddingY: "2rem",
        paddingX: "2rem",
        width: "40%",
      }}
    >
      <Typography
        variant="h2"
        color="white"
        fontSize={30}
        fontWeight={"bold"}
        textTransform={"uppercase"}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default PageTitle;
