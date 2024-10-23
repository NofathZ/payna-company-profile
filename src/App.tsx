import { RouterProvider } from "react-router-dom";

import { Navigation } from "./Components";
import routeApp from "./Routes";
import "./typography.css";

/**
 * App
 *
 * @returns {JSX.Element} - Main Component of App
 */
function App(): JSX.Element {
  return (
    <div className="mt-10 mb-[124px] px-6">
      <Navigation />
      <RouterProvider router={routeApp} />
    </div>
  );
}

export default App;
