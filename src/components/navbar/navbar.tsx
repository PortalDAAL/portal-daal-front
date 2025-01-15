import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import { routes } from "../../constants";
import "./navbar.styles.css";
import { blue } from "@mui/material/colors";
import { isNavRouteActive } from "../../helpers";

interface NavbarItem {
  label: string;
  route: string;
}

const useNavbarItems = (): Array<NavbarItem> => {
  return [
    { label: "Início", route: routes.root },
    {
      label: "Manual do Aluno",
      route: routes.guide,
    },
    {
      label: "Eventos",
      route: routes.events,
    },
    {
      label: "Sobre",
      route: routes.about,
    },
  ];
};

const Navbar = (): React.ReactElement => {
  const theme = useTheme();
  const { user } = useUser();
  const navbarItems = useNavbarItems();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "20px",
          marginBottom: "1rem",
          paddingY: "1rem",
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Link to={routes.root} className="navbar-link">
          <Avatar
            src="/src/images/logo_daal.jpeg"
            variant="square"
            alt="Logo DAAL"
            sx={{ width: 56, height: 56, borderRadius: 2 }}
          />
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {navbarItems.map((i: NavbarItem) => {
            return (
              <Link
                to={i.route}
                key={i.label}
                className="navbar-link"
                style={{
                  color: "white",
                }}
              >
                <Typography
                  component="li"
                  className={
                    // Se a página ativa é um dos links da navbar, marque esse link como selecionado.
                    // location.pathname.includes(i.route)
                    isNavRouteActive(location.pathname, i.route)
                      ? "navbar-item-selected"
                      : ""
                  }
                >
                  {i.label}
                </Typography>
              </Link>
            );
          })}
        </Box>

        {user ? (
          <Avatar sx={{ bgcolor: blue[900] }}>
            {user.username.charAt(0).toUpperCase()}
          </Avatar>
        ) : (
          <Button
            variant="contained"
            className="navbar-enter-btn"
            disableElevation
            sx={{ fontSize: "16px" }}
            onClick={() => navigate(routes.login)}
          >
            Entrar
          </Button>
        )}
      </Box>
    </>
  );
};

export default Navbar;
