import Header from "next/head";
import React, { Fragment, useState } from "react";
import styles from "@/styles/auth.module.css";
import Button from "@/components/ui/Button";
import { submitLoginPassword } from "../../functions/auth/submitLoginPassword";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "redux/reducers/authReducer";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async () => {
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
      })
      .catch((err) => {
        toast.error(err.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

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
            name="login"
            onChange={(e) => setEmail(handleInput(e))}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Пароль</label>
          <input
            type="text"
            placeholder="Ваш пароль"
            className={styles.formControl}
            name="password"
            onChange={(e) => setPassword(handleInput(e))}
          />
        </div>
        <Button disabled={!email || !password || isLoading} handleClick={login}>
          Вход с логином и паролем
        </Button>
        <Button disabled={isLoading || !email || password}>
          Вход с помощью Google
        </Button>
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
