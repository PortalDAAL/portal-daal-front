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
      }}
    >
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
