import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarePage from "./pages/CarePage";
import SpeciesPage from "./pages/Species/SpeciesPage";
import FunFactsPage from "./pages/FunFacts/FunFacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/history",
    element: <FunFactsPage />,
  },
  {
    path: "/species",
    element: <SpeciesPage />,
  },
  {
    path: "/care",
    element: <CarePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
