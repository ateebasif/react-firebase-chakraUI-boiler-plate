import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PublicRoute(props) {
  const { restricted, user } = props || {};

  return user && !restricted ? (
    <Outlet />
  ) : !user ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
  // return <Outlet />;
}

export default PublicRoute;
