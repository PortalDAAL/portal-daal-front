import React, { useState } from "react";
import { useUser } from "../../UserContext";
import { Actions } from "../../actions/actions";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { emailRegex, routes } from "../../constants";
import "./signup-form.styles.css";
import { Link } from "react-router-dom";

const SignUpForm = (): React.ReactElement => {
  const { login } = useUser();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [confirmPasswd, setConfirmPasswd] = useState<string>("");
  const [isFromIMD, setIsFromIMD] = useState<string>("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateFields = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "O nome é obrigatório.";
    }
    if (!email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "O e-mail não é válido.";
    }
    if (!passwd.trim()) {
      newErrors.passwd = "A senha é obrigatória.";
    } else if (passwd.length < 6) {
      newErrors.passwd = "A senha deve ter pelo menos 6 caracteres.";
    }

    if (passwd !== confirmPasswd) {
      newErrors.confirmPasswd = "As senhas não coincidem.";
    } else if (!confirmPasswd.trim()) {
      newErrors.confirmPasswd = "A confirmação de senha é obrigatória.";
    }

    if (!isFromIMD.trim()) {
      newErrors.isFromIMD = "Confirme se você é aluno do IMD ou não.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    if (errors[field]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[field];
        return updatedErrors;
      });
    }

    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "passwd":
        setPasswd(value);
        break;
      case "confirmPasswd":
        setConfirmPasswd(value);
        break;
      case "isFromIMD":
        setIsFromIMD(value);
        break;
      default:
        break;
    }
  };

  const handleClick = (): void => {
    if (validateFields()) {
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
    }
  };

  return (
    <>
      <form>
        <Box className="flex-column" sx={{ justifyContent: "center" }}>
          <Box className="flex-column">
            <Box className="input-row">
              <TextField
                label="Nome"
                variant="standard"
                type="text"
                error={!!errors.name}
                helperText={errors.name}
                margin="dense"
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <TextField
                label="E-mail"
                variant="standard"
                type="email"
                margin="dense"
                error={!!errors.email}
                helperText={errors.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </Box>
            <Box className="input-row">
              <TextField
                label="Senha"
                variant="standard"
                type="password"
                margin="dense"
                error={!!errors.passwd}
                helperText={errors.passwd}
                onChange={(e) => handleChange("passwd", e.target.value)}
              />
              <TextField
                label="Confirmar senha"
                variant="standard"
                type="password"
                margin="dense"
                error={!!errors.confirmPasswd}
                helperText={errors.confirmPasswd}
                onChange={(e) => handleChange("confirmPasswd", e.target.value)}
              />
            </Box>
            <Box marginTop="1rem" />
            <FormControl
              component="fieldset"
              error={!!errors.isFromIMD}
              sx={{
                alignSelf: "center",
              }}
            >
              <FormLabel component="legend" sx={{ alignSelf: "center" }}>
                Você é aluno do IMD?
              </FormLabel>
              <RadioGroup
                row
                value={isFromIMD}
                onChange={(e) => handleChange("isFromIMD", e.target.value)}
                sx={{ alignSelf: "center" }}
              >
                <FormControlLabel
                  value={"sim"}
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value={"não"}
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
            {errors.isFromIMD && (
              <FormHelperText sx={{ alignSelf: "center" }} error>
                {errors.isFromIMD}{" "}
              </FormHelperText>
            )}
            <Button variant="contained" onClick={handleClick} sx={{ my: 2 }}>
              Criar
            </Button>
          </Box>
          <Typography variant="subtitle1" textAlign={"center"}>
            Já tem uma conta? Faça seu login clicando
            <Link
              to={routes.login}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              {" "}
              aqui
            </Link>
            .
          </Typography>
        </Box>
      </form>
    </>
  );
};
export default SignUpForm;
