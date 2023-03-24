import Home from "./pages/Home";
import User from "./pages/User";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
