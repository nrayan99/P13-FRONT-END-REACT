import React from "react";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectJwt,
  updateFirstName,
  updateIsLoggedIn,
  updateJwt,
  updateLastName,
} from "../features/user/userSlice";

function AuthCheck() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const token =
    useAppSelector(selectJwt) ||
    localStorage.getItem("token") ||
    sessionStorage.getItem("token") ||
    "";
  useLayoutEffect(() => {
    async function call() {
      try {
        const { data } = await axios.post(
          "user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(updateFirstName(data.body.firstName));
        dispatch(updateLastName(data.body.lastName));
        dispatch(updateJwt(token));
        dispatch(updateIsLoggedIn(true));
      } catch (err) {
        localStorage.removeItem("token");
        console.log(err);
      }
      setIsLoading(false);
    }
    call();
  }, [dispatch, location.pathname, token]);
  return isLoading ? <div>Loading...</div> : <Outlet />;
}

export default AuthCheck;
