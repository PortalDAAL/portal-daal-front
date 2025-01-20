import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import SignUpForm from "../../components/forms/signup-form";

const SignUp = (): React.ReactElement => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        placeSelf: "center",
        placeItems: "center",
        minHeight: "20rem",
        maxHeight: "40rem",
        borderWidth: "4px",
        padding: "2rem",
        marginY: "5vh",
        borderStyle: "solid",
        borderColor: theme.palette.secondary.main,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        color="primary"
        sx={{
          marginTop: "2rem",
          fontWeight: 700,
        }}
      >
        CRIAR CONTA
      </Typography>
      <Card elevation={0}>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
