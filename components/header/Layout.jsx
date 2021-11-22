import React from "react";
import NavbarM from "../navigation/Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid px-0">
      <Header />
      <NavbarM />
      {children}
    </div>
  );
};

export default Layout;
