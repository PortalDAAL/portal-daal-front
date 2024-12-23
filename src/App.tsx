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
import Store from "./pages/Store";
import SignUp from "./pages/user/SignUp";
import { UserProvider } from "./UserContext";
import Login from "./pages/user/Login";
import AddEvent from "./pages/events/AddEvent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/events" element={<Events />}></Route>
        <Route path="/enter" element={<SignUp />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/login" element={<Login />} />
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
