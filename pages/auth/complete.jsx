import React, { Fragment, useEffect, useState } from "react";
import Header from "next/head";
import { signInWithEmailLink, updatePassword } from "@firebase/auth";
import { auth } from "config/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/dist/client/router";

const Completed = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const btnClassName =
    email && password && password.length > 6 && !loading
      ? "btn btn-outline-primary"
      : "btn btn-outline-primary disabled";
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
        console.log({ token });
        // router.push("/");
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
      <div style={{ width: "400px", margin: "auto" }}>
        <div className="input-group mb-3">
          <label className="my-3">Логин</label>
          <input
            name="login"
            defaultValue={email}
            type="text"
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="input-group mb-3">
          <label className="my-3">Пароль</label>
          <input
            type="password"
            className="form-control"
            onChange={handleInput}
            autoFocus
            name="password"
          ></input>
        </div>
        <div className={btnClassName} onClick={handleRegister}>
          Завершить регистрацию
        </div>
      </div>
    </Fragment>
  );
};

export default Completed;
