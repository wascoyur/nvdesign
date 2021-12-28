import React, { Fragment, useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import logo from "../../public/icons/NV-logo.jpg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import logout from "functions/firebase/logout";
import { USER_LOGOUT } from "redux/reducers/authReducer";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isOpen = (e) => {
    setOpen((open) => !open);
  };
  const dispatch = useDispatch();
  const out = () => {
    dispatch({ type: USER_LOGOUT, payload: null });
    logout();
    setUserName("");
    router.push("/auth/login");
  };

  useEffect(() => {
    user && setUserName(user.userName);
    
  }, []);
  const dropDownMenu = (
    <div className={open ? styles.overlay : styles.hide}>
      <div className={styles.content}>
        <ul>
          <li>
            <Link href="#">Личный кабинет</Link>
          </li>
          <li>
            <Link href="#">Корзина</Link>
          </li>
          <li>
            <Link href="#">Чеки (покупки)</Link>
          </li>
          <li>
            <div href="#" onClick={out}>
              Выход
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
  const AuthBlock = () => {
    const register = (
      <div className={styles.auth}>
        <ul>
          <li>
            <Link href="/auth/register">Регистрация</Link>
          </li>
          <li>
            <Link href="/auth/login">Вход</Link>
          </li>
        </ul>
      </div>
    );
    const user = (
      <div className={styles.auth}>
        {userName}
        {dropDownMenu}
      </div>
    );
    return userName && userName.length > 1 ? user : register;
  };

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="NVDesign" />
          </a>
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
      <div onClick={isOpen} onBlur={isOpen}>
        <AuthBlock />
      </div>
    </div>
  );
};
export default Navbar;
