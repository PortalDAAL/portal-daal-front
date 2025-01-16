import { Box, Card, CardContent, Typography } from "@mui/material";
import SignUpForm from "../../components/forms/signup-form";
import { Link } from "react-router-dom";
import { routes } from "../../constants";

const SignUp = (): React.ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        color="primary" /* Primary vem do tema que criamos, é equivalente a theme.palette.primary.main */
        sx={{
          marginY: "2rem",
          fontWeight: 700,
        }}
      >
        CRIAR CONTA
      </Typography>
      <Card>
        <CardContent>
          <SignUpForm />
          <Typography variant="subtitle1">
            Já tem uma conta? Faça seu <Link to={routes.login}> login</Link>.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
