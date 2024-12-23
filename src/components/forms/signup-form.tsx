import React, { useState } from "react";
import { useUser } from "../../UserContext";
import { Actions } from "../../actions/actions";
import { Box, Button, TextField } from "@mui/material";

const SignUpForm = (): React.ReactElement => {
  const { login } = useUser();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");

  const handleClick = (): void => {
    Actions.postSignUp(name, email, passwd)
      .then((result) => {
        if (result) {
          Actions.postLogin(email, passwd)
            .then((res) => {
              if (res) {
                login(res);
              }
            })
            .catch((err) => console.error("Erro ao logar: ", err));
        }
      })
      .catch((err) => console.error("Erro ao cadastrar: ", err));
  };

  return (
    <>
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
              label="Nome"
              variant="standard"
              required
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="E-mail"
              variant="standard"
              required
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              label="Senha"
              variant="standard"
              required
              type="password"
              onChange={(e) => {
                setPasswd(e.target.value);
              }}
            />
            <Button variant="contained" onClick={handleClick} sx={{ my: 2 }}>
              Criar
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default SignUpForm;
