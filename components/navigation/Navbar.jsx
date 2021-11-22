import React, { Fragment, useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

import Image from "next/image";
import Head from "next/head";

const Navbar = () => {
  return (
    <Fragment>
      
      <nav
        className={
          "navbar navbar-expand-md bg-success bg-opacity-50 text-white justify-content-center"
        }
      >
        {/* <div className="container"> */}
        <div className="col navbar-brand mx-2">NVDesign</div>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Поиск"
            aria-label="Search"
          />
          <button className="btn btn-outline-white" type="submit">
            Поиск
          </button>
        </form>
        <div className=" nav-item m-1">Магазин</div>
        <div className="col align-self-end">
          <div className="nav-link m-1">
            <Link href="/auth/login" className={styles.link}>
              Вход
            </Link>
          </div>
          <div className="nav-item m-1">
            <Link href="/auth/register">Регистрация</Link>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </Fragment>
  );
};
export default Navbar;
