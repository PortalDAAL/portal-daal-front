import { Box, Button, TextField } from "@mui/material";
import constants from "../../constants";
import { useState } from "react";
import { useUser } from "../../UserContext";
import { User } from "../../interfaces/User";
import axios from "axios";

// TODO: refatorar e colocar cada coisa em seu canto
const SignUp = (): React.ReactElement => {
  const { login } = useUser();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");

  const handleSave = (): void => {
    axios
      .post(constants.api.signup.url, {
        username: name,
        email: email,
        password: passwd,
      })
      .then((res) => {
        if (res.status == 200) {
          // TODO: pelo amor de deus colocar essas requisições
          // em funções específicas para reutilização
          axios
            .post(constants.api.login.url, {
              identifier: email,
              password: passwd,
            })
            .then((res) => {
              console.log(res);
              const user: User = {
                username: name,
                email: email,
                blocked: false,
                createdAt: new Date(),
                token: res.data.jwt,
              };
              login(user);
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          console.log("Tentativa de criar usuário falhou.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form>
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
      </form>
      <Button variant="outlined" onClick={handleSave}>
        {" "}
        Criar{" "}
      </Button>
    </Box>
  );
};

export default SignUp;
