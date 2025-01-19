import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import LoginForm from "../../components/forms/login-form";
import LoginImg from "../../images/login_img.png";
import "./Login.styles.css";

const Login = (): React.ReactElement => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginY: "6rem",
      }}
    >
      <img
        src={LoginImg}
        className="enter-img"
        title="Ícone de Login"
        alt="Desenho de homem entrando em sua casa, representando o processo de login."
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderWidth: "4px",
          borderStyle: "solid",
          borderColor: theme.palette.secondary.main,
          borderRadius: 4,
          paddingY: "2rem",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          paddingX: "1rem",
        }}
      >
        <Typography
          variant="h1"
          color="inherit"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: 36,
          }}
        >
          LOGIN
        </Typography>
        <Card
          elevation={0}
          sx={{
            maxWidth: "25rem",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <CardContent sx={{ marginTop: 2 }}>
            <LoginForm
              formTheme={{
                backgroundColor: theme.palette.primary.contrastText,
                buttonColor: theme.palette.primary.contrastText,
                textColor: theme.palette.primary.contrastText,
                labelColor: theme.palette.primary.main,
                buttonTextColor: theme.palette.primary.main,
              }}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
