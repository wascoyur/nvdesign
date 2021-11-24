import React, { Fragment, useEffect, useState } from "react";
import Header from "next/head";

const Completed = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const btnOff =
    email && password && password.length > 6
      ? "btn btn-outline-primary"
      : "btn btn-outline-primary disabled";
  const handleInput = (e) => {};
  const handlePassword = (e) => {
    setPassword(e.target.value);
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
            onChange={handlePassword}
            autoFocus
          ></input>
        </div>
        <div className={btnOff}>Завершить регистрацию</div>
      </div>
    </Fragment>
  );
};

export default Completed;
