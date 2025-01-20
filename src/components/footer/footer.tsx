import { Box, IconButton, SxProps, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

interface FooterProps {
  sx?: SxProps;
}

const Footer = ({ sx }: FooterProps): React.ReactElement => {
  const theme = useTheme();

  return (
    <footer
      style={{
        marginTop: "3rem",
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "1rem",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          color: theme.palette.secondary.contrastText,
          ...sx,
        }}
      >
        <Box sx={{ alignSelf: "center" }}>
          <span> &copy; Equipe Portal DAAL, 2025 </span>
        </Box>
        <Box className="flex-row">
          <IconButton
            color="inherit"
            disableRipple
            href="https://www.instagram.com/daal.ufrn/"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            disableRipple
            href="https://www.facebook.com/daal.ufrn/"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
