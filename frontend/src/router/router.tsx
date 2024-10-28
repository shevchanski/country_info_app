import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const ReactRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default ReactRouter;
