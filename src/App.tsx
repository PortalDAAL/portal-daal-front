import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import React from "react";
import Events from "./pages/Events";
import Guide from "./pages/Guide";
import SignUp from "./pages/user/SignUp";
import { UserProvider } from "./UserContext";
import Login from "./pages/user/Login";
import { routes } from "./constants";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import EventDetails from "./pages/events/EventDetails";
import "./global.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.root} element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.guide} element={<Guide />} />
        <Route path={routes.events} element={<Events />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.eventDetails} element={<EventDetails />} />
      </Route>
    </>
  )
);

const theme = createTheme({
  typography: {
    // Para textos em geral, fonte Inter
    fontFamily: "Inter, Arial, Helvetica, sans-serif",
    // Para títulos maiores, fonte Poppins
    h1: {
      fontFamily: "Poppins, Arial, Helvetica, sans-serif",
    },
    h2: {
      fontFamily: "Poppins, Arial, Helvetica, sans-serif",
    },
  },
});

const App = (): React.ReactElement => {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
