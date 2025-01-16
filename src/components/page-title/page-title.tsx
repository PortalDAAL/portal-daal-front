import { Box, Typography } from "@mui/material";

interface PageProps {
  text: string;
  urlImage : string;
}

const PageTitle = ({ text, urlImage }: PageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        position: "relative",
        backgroundImage: `url(${urlImage})`,
        backgroundSize: "contain",
        width: "100%",
        height: "44.01vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        color="#013476"
        variant="h1"
        fontFamily="Poppins"
        textAlign="center"
        letterSpacing="0.1em"
        sx={{
          WebkitTextStroke: "2px #013476",
          fontSize: "2em",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default PageTitle;
