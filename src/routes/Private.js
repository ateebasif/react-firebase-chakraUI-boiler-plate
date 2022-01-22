import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import PrivateLayout from "Layouts/Private";
import { UserContext } from "utils/contexts/userContext";

function PrivateRoute(props) {
  const { component: Component, restricted, ...restProps } = props || {};
  const { user } = useContext(UserContext);

  return (
    <Route
      {...restProps}
      render={(params) =>
        user ? (
          <PrivateLayout>
            <Component {...params} />
          </PrivateLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
