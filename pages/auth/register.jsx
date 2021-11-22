import React, { Fragment } from "react";
import Head from "next/head";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Fragment>
      <Head>
        <title>Регистрация нового пользователя</title>
      </Head>
      <div className="row">
        <div className="form-floating form-control-sm my-2 col-md-6 offset-md-3">
          <input
            type="email"
            className="form-control "
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">
            Для регистрации введите ваш адрес электронной почты
          </label>
          <div
            className="btn btn-outline-primary btn-sm "
            onClick={handleSubmit}
          >
            Зарегистрироваться
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
