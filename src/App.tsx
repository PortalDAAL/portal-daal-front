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
import AddEvent from "./pages/events/AddEvent";
import constants from "./constants";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={constants.routes.root} element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path={constants.routes.about} element={<About />} />
        <Route path={constants.routes.guide} element={<Guide />} />
        <Route path={constants.routes.events} element={<Events />} />
        <Route path={constants.routes.signup} element={<SignUp />} />
        <Route path={constants.routes.login} element={<Login />} />
        <Route path={constants.routes.addEvent} element={<AddEvent />} />
      </Route>
    </>
  )
);

const App = (): React.ReactElement => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
