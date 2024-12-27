import { Box, Card, CardContent, Typography } from "@mui/material";
import LoginForm from "../../components/forms/login-form";
import LoginImg from "../../images/login_img.png";
import "./styles.css";
import { texts } from "../../constants";

const Login = (): React.ReactElement => {
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
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: 3,
            fontSize: 20,
            color: texts.color.primary,
            fontWeight: texts.bold,
          }}
        >
          {" "}
          LOGIN
        </Typography>
        <Card sx={{ maxWidth: "40rem", minWidth: "25rem" }}>
          <CardContent sx={{ marginTop: 2 }}>
            <LoginForm />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
