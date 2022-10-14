import React, { useContext } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "containers/Login";
import SignUp from "containers/SignUp";
import Home from "containers/Home";
import About from "containers/About";
import NotFound from "components/NotFound";
import PrivateRoute from "routes/Private";
import PublicRoute from "routes/Public";
import { UserContext } from "utils/contexts/userContext";

function App() {
  const { loading, user } = useContext(UserContext);

  return (
    <>
      <Router>
        {!loading && (
          <Routes>
            <Route element={<PublicRoute restricted user={user} />}>
              <Route element={<Login />} path="/login" />
              <Route element={<SignUp />} path="/sign-up" restricted />
            </Route>

            <Route path="/" element={<PrivateRoute />}>
              <Route element={<Home />} path="/" exact />
              <Route element={<Home />} path="/home" exact />
              <Route element={<About />} path="/about" exact />
            </Route>

            <Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
