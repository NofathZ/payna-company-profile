import { createBrowserRouter } from "react-router-dom";

import Constants from "../Constants";
import { Home } from "../Screens";

const routeApp = createBrowserRouter([
  {
    path: Constants.ROUTES.HOME,
    element: <Home />
  },
])

export default routeApp;
