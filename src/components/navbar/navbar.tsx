import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { NavbarItem } from "./interfaces";
import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const useGetNavbarItems = (): Array<NavbarItem> => {
  return [
    { label: "Home", route: "", icon: <HomeIcon /> },
    { label: "Manual do Aluno", route: "guide", icon: <MenuBookIcon /> },
    { label: "Loja", route: "store", icon: <LocalGroceryStoreRoundedIcon /> },
    { label: "Eventos", route: "events", icon: <EventRoundedIcon /> },
    { label: "Sobre", route: "about", icon: <InfoRoundedIcon /> },
    { label: "Entrar", route: "enter", icon: <LoginOutlinedIcon /> },
  ];
};

declare interface PresentationProps {
  items: Array<NavbarItem>;
}

/**
 * Esse aqui é o componente Navbar. Nele, nós mantemos o estado do componente e seus dados, além de
 * passar para o NavbarPresentation os dados para que ele retorne um elemento HTML
 */
const Navbar = (): React.ReactElement => {
  const navbarItems = useGetNavbarItems();
  return <NavbarPresentation items={navbarItems} />;
};

/**
 * Esse aqui é o método do NavbarPresentation. Aqui, nós recebemos uma lista de dados, escrevemos um HTML
 * exibindo as informações contidas nesses dados e o retornamos para o componente Navbar.
 */
const NavbarPresentation = ({ items }: PresentationProps) => {
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
        {items.map((i: NavbarItem) => {
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
