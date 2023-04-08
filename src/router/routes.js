import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import DefaultLayout from "../layouts/Default";
import PrivateRoute from "./PrivateRoute";
import AuthCheck from "./AuthCheck";

const routes = [
  {
    element: <AuthCheck />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: "/",
            element: <PrivateRoute />,
            children: [
              {
                path: "",
                element: <Home />,
              },
            ],
          },
          {
            path: "/profile",
            element: <PrivateRoute authRequired />,
            children: [
              {
                path: "",
                element: <Profile />,
              },
            ],
          },
          {
            path: "/login",
            element: <PrivateRoute />,
            children: [
              {
                path: "",
                element: <Login />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
