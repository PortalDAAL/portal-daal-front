import React, { useState } from "react";
import { useUser } from "../../UserContext";
import { Actions } from "../../actions/actions";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = (): React.ReactElement => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");

  const handleClick = (): void => {
    Actions.postLogin(email, passwd).then((user) => {
      console.log(user);
      if (user) {
        login(user);
        navigate("/");
      }
    });
  };

  return (
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Email"
            variant="standard"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Senha"
            variant="standard"
            type="password"
            onChange={(e) => {
              setPasswd(e.target.value);
            }}
          />
        </Box>
        <Button variant="contained" onClick={handleClick} sx={{ my: 2 }}>
          Entrar
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
