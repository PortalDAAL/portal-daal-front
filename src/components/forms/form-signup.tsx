/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useUser } from "../../UserContext";
import { Actions } from "../../actions/actions";
import { Button, TextField } from "@mui/material";

const FormSignUp = (): React.ReactElement => {
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
    <FormSignUpPresentation
      onNameChange={setName}
      onEmailChange={setEmail}
      onClick={handleClick}
      onPasswordChange={setPasswd}
    />
  );
};

const FormSignUpPresentation = ({
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onClick,
}: {
  onNameChange: any;
  onEmailChange: any;
  onPasswordChange: any;
  onClick: () => void;
}) => {
  return (
    <>
      <form>
        <TextField
          label="Nome"
          variant="standard"
          required
          type="text"
          onChange={(e) => {
            onNameChange(e.target.value);
          }}
        />
        <TextField
          label="E-mail"
          variant="standard"
          required
          type="email"
          onChange={(e) => {
            onEmailChange(e.target.value);
          }}
        />
        <TextField
          label="Senha"
          variant="standard"
          required
          type="password"
          onChange={(e) => {
            onPasswordChange(e.target.value);
          }}
        />
        <Button variant="outlined" onClick={onClick}>
          {" "}
          Criar{" "}
        </Button>
      </form>
    </>
  );
};

export default FormSignUp;
