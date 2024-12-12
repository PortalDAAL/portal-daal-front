import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { Link, Outlet } from "react-router-dom";

interface NavbarItem {
  label: string;
  route: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

const items: Array<NavbarItem> = [
  { label: "Home", route: "", icon: <HomeIcon /> },
  { label: "Manual do Aluno", route: "guide", icon: <MenuBookIcon /> },
  { label: "Loja", route: "store", icon: <LocalGroceryStoreRoundedIcon /> },
  { label: "Eventos", route: "events", icon: <EventRoundedIcon /> },
  { label: "Sobre", route: "about", icon: <InfoRoundedIcon /> },
];

const Navbar = (): React.ReactElement => {
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
            <Link to={"/" + i.route}>
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
