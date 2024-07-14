import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage";
import { ErrorPage } from "./components/pages/ErrorPage";
import { PlanetInfo } from "./components/shared/PlanetInfo";
import { loader } from "./utils/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:planetName",
        loader: loader,
        element: <PlanetInfo />,
      },
    ],
  },
]);
