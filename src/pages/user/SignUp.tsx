import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import SignUpForm from "../../components/forms/signup-form";
import { Link } from "react-router-dom";
import { routes } from "../../constants";

const SignUp = (): React.ReactElement => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 style={{ color: theme.palette.primary.main }}>CRIAR CONTA</h1>
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
