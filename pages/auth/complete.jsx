import React, { Fragment, useEffect, useState } from "react";
import Header from "next/head";
import { confirm } from "functions/firebase/confirmEmailRegistration";

const Completed = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const btnClassName =
    email && password && password.length > 6
      ? "btn btn-outline-primary"
      : "btn btn-outline-primary disabled";
  const handleInput = (e) => {
    console.log({ e });
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
  const handleRegister = (e) => {
      confirm()
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
