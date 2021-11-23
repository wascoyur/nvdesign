import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarM from "../navigation/Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid px-0">
      <Header />
      <NavbarM />
      <ToastContainer />
      {children}
    </div>
  );
};

export default Layout;
