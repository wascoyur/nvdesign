import Header from "next/head";
import React, { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <Header>
        <title>Вход в портал</title>
      </Header>
      <div style={{ width: "400px", margin: "auto" }}>
        <div className="input-group mb-3">
          <label className="my-3">Логин</label>
          <input type="text" className="form-control"></input>
        </div>
        <div className="input-group mb-3">
          <label className="my-3">Пароль</label>
          <input type="text" className="form-control"></input>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
