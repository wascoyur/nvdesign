import Header from "next/head";
import React, { Fragment, useState } from "react";
import styles from "@/styles/auth.module.css";
import Button from "@/components/ui/Button";
import {
  loginWithGoogle,
  submitLoginPassword,
} from "../../functions/auth/submitLoginPassword";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "redux/reducers/authReducer";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fogotpass, setFogotPass] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()

  const loginEmailPassword = async (e) => {
    setIsLoading(true);

    await submitLoginPassword(email, password)
      .then((result) => {
        // console.log({ result });
        dispatch({
          type: USER_LOGIN,
          payload: {
            email: email,
            token: result.token,
          },
        });
        router.push('/')
      })
      .catch((err) => {
        toast.error(err.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  const submitGoogle = async () => {
    setIsLoading(true);
    await loginWithGoogle()
      .then((resp) => {
        // console.log({ resp });
        dispatch({
          type: USER_LOGIN,
          payload: { userName: resp.userName, token: resp.token },
        });
      })
      .catch((err) => {
        toast.warning(err.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };
  const fogotPass = () => {};

  return (
    <Fragment>
      <Header>
        <title>Вход в портал</title>
      </Header>
      <div className={styles.main}>
        <form className={styles.formGroup}>
          <label>Логин</label>
          <input
            type="text"
            placeholder="Ваш логин"
            className={styles.formControl}
            name="login"
            onChange={(e) => setEmail(handleInput(e))}
          />

          <label>Пароль</label>
          <input
            type="password"
            placeholder="Ваш пароль"
            className={styles.formControl}
            name="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(handleInput(e))}
          />
        </form>
        <Button
          name="login"
          disabled={!email || !password || isLoading}
          handleClick={loginEmailPassword}
        >
          Вход с логином и паролем
        </Button>
        <Button
          disabled={isLoading || email || password}
          name="google"
          handleClick={submitGoogle}
        >
          Вход с помощью Google
        </Button>
        <div className={styles.repair}>
          <Link href="/auth/repair">Забыл пароль?</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

const handleInput = (e) => {
  // console.log({ e });
  switch (e.target.name) {
    case "login":
      return e.target.value;
    case "password":
      return e.target.value;

    default:
      break;
  }
};
