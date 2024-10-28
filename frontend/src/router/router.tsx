import { createBrowserRouter } from "react-router-dom";
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
]);

export default ReactRouter;
