import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import Navbar from "../components/navigation/Navbar";

export default function Home() {
  return (
    <Provider store={store}>
      <center>Start Page</center>
    </Provider>
  );
}
