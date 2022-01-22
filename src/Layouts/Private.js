import React from "react";
import Navbar from "components/NavBar";

function Private({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Private;
