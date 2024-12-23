import { Box, Card, CardContent } from "@mui/material";
import LoginForm from "../../components/forms/login-form";

const Login = (): React.ReactElement => {
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
          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
