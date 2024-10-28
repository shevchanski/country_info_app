import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import CountriesPage from "../pages/Countries/CountriesPage";
import CountryInfoPage from "../pages/CountryInfo/CountryInfoPage";

const ReactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <h1>Main Page</h1>,
      },
      {
        path: "/countries",
        element: <CountriesPage />,
      },
      {
        path: "/countries/:countryCode",
        element: <CountryInfoPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/countries"} />,
  },
]);

export default ReactRouter;
