import Home from "./pages/Home";
import User from "./pages/User";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
];

export default routes;
