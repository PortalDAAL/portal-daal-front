import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const Layout = (): React.ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
