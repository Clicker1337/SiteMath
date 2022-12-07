import clsx from "clsx";
import React from "react";
import Header from "../../components/common/header/Header.component";
import MainLayout from "../../components/layouts/MainLayout.component";
import s from "./AuthPage.module.scss";

const AuthPage = () => {
  return (
    <MainLayout selfClassName={s.auth}>
      <div className="container">
        <div className={s.auth__container}>
          <form className={clsx(s.auth__form, s.form)}>
            <h1 className={s.form__title}>Вход</h1>
            <input className={s.form__input} />
            <input className={s.form__input} />
            <button className={s.form__button}>Войти</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default AuthPage;
