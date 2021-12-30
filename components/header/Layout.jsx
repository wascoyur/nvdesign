import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarM from "../navigation/Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  
  return (
    <Fragment>
      <Header />
      <NavbarM />
      <ToastContainer />
      {children}
    </Fragment>
  );
};

export default Layout;
