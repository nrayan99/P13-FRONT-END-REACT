import Home from "./pages/Home";
import User from "./pages/User";
import SignIn from "./pages/SignIn";

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
    path: "/sign-in",
    element: <SignIn />,
  },
];

export default routes;
