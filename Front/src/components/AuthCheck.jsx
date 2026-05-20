import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AuthCheck() {
  return localStorage.getItem("auth_userid") ? <Navigate to="/" /> : <Outlet />;
}

export default AuthCheck;
