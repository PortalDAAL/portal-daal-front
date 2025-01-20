import React, { useState } from "react";
import { useUser } from "../../UserContext";
import { Actions } from "../../actions/actions";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { emailRegex, routes } from "../../constants";

type Theme = {
  backgroundColor: string;
  textColor: string;
  labelColor: string;
  buttonColor: string;
  buttonTextColor: string;
};

interface FormProps {
  formTheme?: Theme;
}

const LoginForm = ({ formTheme }: FormProps): React.ReactElement => {
  const { login } = useUser();
  const navigate = useNavigate();
  const theme = useTheme();

  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateFields = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "O e-mail não é válido.";
    }
    if (!passwd.trim()) {
      newErrors.passwd = "A senha é obrigatória.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    if (errors[field]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[field];
        delete updatedErrors["login"];
        return updatedErrors;
      });
    }

    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "passwd":
        setPasswd(value);
        break;
      default:
        break;
    }
  };

  const handleClick = (): void => {
    if (validateFields()) {
      Actions.postLogin(email, passwd)
        .then((user) => {
          if (user) {
            login(user);
            navigate(routes.root);
          } else {
            setErrors({
              login: "Falha ao fazer login.",
              email: "Verifique seu e-mail.",
              passwd: "Verifique sua senha.",
            });
            console.log(errors);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
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
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "1rem",
              backgroundColor: formTheme?.backgroundColor || "transparent",
              padding: 2,
              borderRadius: 1,
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              error={!!errors.email}
              helperText={errors.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              InputLabelProps={{
                style: {
                  color: formTheme?.labelColor || "inherit",
                },
              }}
            />
            <TextField
              label="Senha"
              variant="outlined"
              size="small"
              type="password"
              error={!!errors.passwd}
              helperText={errors.passwd}
              onChange={(e) => {
                handleChange("passwd", e.target.value);
              }}
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              InputLabelProps={{
                style: {
                  color: formTheme?.labelColor || "inherit",
                },
              }}
            />
            {errors.login && (
              <>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.error.main,
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  {errors.login}
                </Typography>
              </>
            )}
          </Box>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              backgroundColor: formTheme?.buttonColor || "primary",
              color: formTheme?.buttonTextColor || "white",
              marginY: 2,
            }}
          >
            Entrar
          </Button>
        </Box>
      </form>
      <Typography
        variant="subtitle1"
        textAlign={"center"}
        sx={{
          color: formTheme?.textColor || "inherit",
        }}
      >
        Não tem uma conta? Clique{" "}
        <Link
          to={routes.signup}
          style={{
            textDecorationLine: "none",
            color: formTheme?.textColor || "primary",
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
