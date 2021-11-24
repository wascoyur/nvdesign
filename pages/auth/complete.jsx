import React, { Fragment, useState } from "react";
import Header from "next/head";

const Completed = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Fragment>
      <Header>
        <title>Завершение регистрации</title>
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

export default Completed;
