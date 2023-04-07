import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectIsLoggedIn } from "../features/user/userSlice";

function PrivateRoute({ authRequired }: { authRequired: boolean }) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  if (!isLoggedIn && authRequired) {
    return <Navigate to="/login" />;
  } else if (isLoggedIn && !authRequired) {
    return <Navigate to="/profile" />;
  } else {
    return <Outlet />;
  }
}

export default PrivateRoute;
