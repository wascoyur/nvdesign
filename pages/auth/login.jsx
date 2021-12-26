import Header from "next/head";
import React, { Fragment } from "react";
import styles from "@/styles/auth.module.css";

const Login = () => {
  return (
    <Fragment>
      <Header>
        <title>Вход в портал</title>
      </Header>
      <div className={styles.main}>
        <div className={styles.formGroup}>
          <label>Логин</label>
          <input
            type="text"
            placeholder="Ваш логин"
            className={styles.formControl}
          ></input>
        </div>
        <div className={styles.formGroup}>
          <label>Пароль</label>
          <input
            type="text"
            placeholder="Ваш пароль"
            className={styles.formControl}
          ></input>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
