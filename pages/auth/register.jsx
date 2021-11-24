import React, { Fragment, useState } from "react";
import Head from "next/head";
import { auth, sendSignInLinkToEmail } from "config/firebase";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  let btnDisable = email
    ? "btn btn-outline-primary btn-sm "
    : "btn btn-outline-primary btn-sm disabled";
  const clear = () => {
    setEmail("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email);
    const config = {
      url: process.env.NEXT_PUBLIC_redirect_url,
      handleCodeInApp: true,
    };
    // debugger;
    await sendSignInLinkToEmail(auth, email, config)
      .then(() => {
        window.localStorage.setItem("emailForRegister", email);
        toast.success(
          `на почту ${email} отправлена ссылка для установки пароля`
        );
        clear();
      })
      .catch((e) => {
        toast.error(
          `Проверьте правильность написания почтового адреса: 
          ${email}`
        );
        const errorCode = e.code;
        const errorMessage = e.message;
      });

    // console.log("token", token);
  };
  const handleForm = (e) => {
    setEmail(e.target.value);

    // console.log(email);
  };
  return (
    <Fragment>
      <Head>
        <title>Зарегистрироваться</title>
      </Head>
      <div className="container p-5">
        <div className="form-floating form-control-sm my-2 col-md-6 offset-md-3">
          <input
            type="email"
            className="form-control "
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleForm}
            autoFocus
            value={email}
          />
          <label htmlFor="floatingInput">
            Для регистрации введите ваш адрес электронной почты
          </label>
          <div
            className={btnDisable}
            onClick={(e) => handleSubmit(e)}
            disabled={email}
          >
            Зарегистрировать: {email}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
