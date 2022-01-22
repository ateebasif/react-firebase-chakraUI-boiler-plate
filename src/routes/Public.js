import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "utils/contexts/userContext";

function PublicRoute(props) {
  const { component: Component, restricted, ...restProps } = props || {};

  const { user } = useContext(UserContext);

  return (
    <Route
      {...restProps}
      render={(params) =>
        user && restricted ? <Redirect to="/" /> : <Component {...params} />
      }
    />
  );
}

export default PublicRoute;
