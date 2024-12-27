import React, { useState } from "react";
import { useUser } from "../../UserContext";
import { Actions } from "../../actions/actions";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { routes, texts } from "../../constants";

const LoginForm = (): React.ReactElement => {
  const { login } = useUser();
  const navigate = useNavigate();

  // TODO: melhorar lógica de validação para além do "required" e retornar respostas como "senha incorreta"
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

  // Quando o user clica no botão, ele é autenticado (via método postLogin) e suas informações são
  // armazenadas no contexto (via login(user)).
  const handleClick = (): void => {
    if (isValidEmail && passwd != "") {
      Actions.postLogin(email, passwd)
        .then((user) => {
          console.log(user);
          if (user) {
            login(user);
            navigate(routes.root);
          }
        })
        .catch((err) => console.error(err));
    } else {
      console.error("erro nos inputs");
    }
  };

  const validateEmail = (): void => {
    setIsValidEmail(emailRegex.test(email));
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
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
          >
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              required
              // Só faz sentido exibir mensagem de erro se o user tiver preenchido o campo de email..
              error={!isValidEmail && email != ""}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail();
              }}
            />
            <TextField
              label="Senha"
              variant="outlined"
              size="small"
              type="password"
              required
              onChange={(e) => {
                setPasswd(e.target.value);
              }}
            />
          </Box>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              marginY: 2,
              maxWidth: 0.5,
              backgroundColor: texts.color.primary,
            }}
          >
            Entrar
          </Button>
        </Box>
      </form>
      <Typography variant="subtitle1">
        Não tem uma conta? Clique{" "}
        <Link
          to={routes.signup}
          style={{
            color: texts.color.secondary,
            textDecorationLine: "none",
          }}
        >
          aqui
        </Link>
        .
      </Typography>
    </>
  );
};

export default LoginForm;
