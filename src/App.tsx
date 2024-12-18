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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/events" element={<Events />} />
    </Route>
  )
);

const App = (): React.ReactElement => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
