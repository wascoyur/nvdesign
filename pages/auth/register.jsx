import React, { Fragment, useState } from "react";
import Head from "next/head";
import { auth } from "config/firebase";
import { toast } from "react-toastify";
import { sendSignInLinkToEmail } from "@firebase/auth";
import { btnToggle } from "../../components/auth/btnToggle.jsx";
import Button from "@/components/ui/Button.jsx";
import styles from "@/styles/auth.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const clear = () => {
    setEmail("");
    setIsloading(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
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

    clear();
  };
  const handleForm = (e) => {
    setEmail(e.target.value);

    // console.log(email);
  };
  return (
    <Fragment>
      <Head>
        <title>Регистрация</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.formGroup}>
          <label htmlFor="floatingInput">
            Для регистрации введите ваш адрес электронной почты
          </label>
          <input
            type="email"
            className="form-control "
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleForm}
            autoFocus
            value={email}
          />

          <Button disabled onClick={(e) => handleSubmit(e)}>Зарегистрировать</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
