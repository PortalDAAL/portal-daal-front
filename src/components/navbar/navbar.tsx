import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import { routes } from "../../constants";
import "./navbar.styles.css";
import { isNavRouteActive } from "../../helpers";
import UserAvatarButton from "../buttons/user-avatar-button";

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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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

        {isSmallScreen ? (
          <div className="menu">
            <IconButton
              id="menu-button"
              aria-controls={open ? "menu-navbar" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleMenuClick}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-navbar"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "menu-button",
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              {navbarItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    navigate(item.route);
                    handleMenuClose();
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
              {user ? (
                <MenuItem onClick={() => navigate(routes.profile)}>
                  Perfil
                </MenuItem>
              ) : (
                <MenuItem onClick={() => navigate(routes.login)}>
                  Entrar
                </MenuItem>
              )}
            </Menu>
          </div>
        ) : (
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
        )}
        {user ? (
          <UserAvatarButton letter={user.username.charAt(0).toUpperCase()} />
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
