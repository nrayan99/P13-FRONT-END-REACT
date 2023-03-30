import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import DefaultLayout from "./layouts/Default";

const routes = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
