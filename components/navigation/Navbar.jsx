import React, { Fragment, useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import logo from "../../public/icons/NV-logo.jpg";
import Image from "next/image";
import Head from "next/head";

const Navbar = () => {
  const userName = "we";
  const authBlock =
    userName && userName.length > 1 ? (
      <div className={styles.auth}>
        <div>{userName}</div>
        <div>выход</div>
      </div>
    ) : (
      <div className={styles.auth}>
        <div>
          <Link href="/register">register</Link>
        </div>
      </div>
    );
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image src={logo} alt="NVDesign"></Image>
        </Link>
      </div>
      <div className={styles.searchbar}>
        <form>
          <input type="search" placeholder="Поиск" />
          {/* <span className="" type="submit">
            Поиск
          </span> */}
        </form>
      </div>
      {authBlock}
    </div>
  );
};
export default Navbar;
