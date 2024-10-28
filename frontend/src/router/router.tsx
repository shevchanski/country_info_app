import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import CountriesPage from "../pages/Countries/CountriesPage";

const ReactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/countries",
    element: <CountriesPage />,
  },
  {
    path: "*",
    element: <Navigate to={"/countries"} />,
  },
]);

export default ReactRouter;
