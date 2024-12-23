import HomeIcon from "@mui/icons-material/Home";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useUser } from "../../UserContext";

export interface NavbarItem {
  label: string;
  route: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

const useNavbarItems = (): Array<NavbarItem> => {
  return [
    { label: "Home", route: "", icon: <HomeIcon /> },
    { label: "Manual do Aluno", route: "guide", icon: <MenuBookIcon /> },
    { label: "Loja", route: "store", icon: <LocalGroceryStoreRoundedIcon /> },
    { label: "Eventos", route: "events", icon: <EventRoundedIcon /> },
    { label: "Sobre", route: "about", icon: <InfoRoundedIcon /> },
    { label: "Entrar", route: "enter", icon: <LoginOutlinedIcon /> },
  ];
};

const Navbar = (): React.ReactElement => {
  const { user } = useUser();
  const navbarItems = useNavbarItems();

  // Se existir um usuário logado, modifique o último item da navbar para o ícone de perfil.
  if (user) {
    const lastItem = navbarItems.find((i: NavbarItem) => i.route === "enter");
    if (lastItem !== undefined) {
      lastItem.label = "";
      lastItem.route = "user";
      lastItem.icon = <AccountCircleRoundedIcon />;
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
          marginY: "2rem",
        }}
      >
        {navbarItems.map((i: NavbarItem) => {
          return (
            <Link to={"/" + i.route} key={i.label}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                  gap: "5px",
                }}
              >
                {i.icon}
                <Typography component="p">{i.label}</Typography>
              </Box>
            </Link>
          );
        })}
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
