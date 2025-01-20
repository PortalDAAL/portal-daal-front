import { Avatar, ButtonBase, Menu, MenuItem, useTheme } from "@mui/material";
import { useUser } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";
import React, { useState } from "react";

interface UserAvatarButtonProps {
  letter: string;
}

const UserAvatarButton = ({
  letter,
}: UserAvatarButtonProps): React.ReactElement => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { logout } = useUser();
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorElement(null);
  };

  const handleLogout = (): void => {
    logout();
    handleCloseMenu();
    navigate(routes.root);
  };

  return (
    <>
      <ButtonBase onClick={handleOpenMenu} disableTouchRipple>
        <Avatar
          sx={{
            backgroundColor: theme.palette.info.main,
            color: theme.palette.info.contrastText,
          }}
        >
          {letter}
        </Avatar>
      </ButtonBase>
      <Menu
        anchorEl={anchorElement}
        open={anchorElement != null}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatarButton;
