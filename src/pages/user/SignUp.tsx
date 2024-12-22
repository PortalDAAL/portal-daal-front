import { Box } from "@mui/material";
import FormSignUp from "../../components/forms/form-signup";

const SignUp = (): React.ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormSignUp />
    </Box>
  );
};

export default SignUp;
