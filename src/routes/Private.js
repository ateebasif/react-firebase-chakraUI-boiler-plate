import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import PrivateLayout from "Layouts/Private";
import { UserContext } from "utils/contexts/userContext";

function PrivateRoute() {
  const { user } = useContext(UserContext);

  return user ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
