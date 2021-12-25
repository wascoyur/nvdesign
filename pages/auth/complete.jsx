import React, { Fragment, useEffect, useState } from "react";
import Header from "next/head";
import { signInWithEmailLink, updatePassword } from "@firebase/auth";
import { auth } from "config/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/dist/client/router";
import styles from "@/styles/auth.module.css";
import Button from "@/components/ui/Button";

const Completed = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInput = (e) => {
    // console.log({ e });
    switch (e.target.name) {
      case "login":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };
  const handleRegister = async (e) => {
    setLoading(true);
    await signInWithEmailLink(auth, email)
      .then((res) => {
        if (!res.user.emailVerified) throw new Error();
        // console.log({ res });
        window.localStorage.removeItem("emailForRegister");
        return auth.currentUser;
      })
      .then((currentUser) => {
        updatePassword(currentUser, password);
        // console.log({ updatedUser });
        return currentUser;
      })
      .then((updatedUser) => {
        const idTokenResult = updatedUser.getIdTokenResult();
        return idTokenResult;
      })
      .then((token) => {
        toast.success("Регистрация завершена");
        console.log({ token });
        router.push("/");
      })
      .catch((err) => {
        toast.error(`Завершение регистрации завершилось неудачно.
      Попробуйте еще раз`);
      });
    setLoading(false);
  };
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegister"));
  }, []);
  return (
    <Fragment>
      <Header>
        <title>Завершение регистрации</title>
      </Header>
      <div className={styles.main}>
        <div className={styles.formGroup}>
          <label className="my-3">Логин</label>
          <input
            name="login"
            defaultValue={email}
            type="text"
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className="my-3">Пароль</label>
          <input
            type="password"
            className="form-control"
            onChange={handleInput}
            autoFocus
            name="password"
          ></input>
        </div>
        <Button
          disabled={!email || password.length < 6}
          handleClick={handleRegister}
        >
          Завершить регистрацию
        </Button>
      </div>
    </Fragment>
  );
};

export default Completed;
