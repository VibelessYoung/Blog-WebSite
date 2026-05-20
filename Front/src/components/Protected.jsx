import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  return localStorage.getItem("auth_userid") ? <Outlet /> : <Navigate to="/" />;
}

export default Protected;
