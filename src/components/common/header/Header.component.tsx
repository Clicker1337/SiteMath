import React from "react";
import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__container}>
          <section className={s.header__logo}>
            <img src="LOGO.svg"></img>
            <p>Math Tests</p>
          </section>
          <section className={`${s.header__profile} ${s.profile}`}>
            <div className={s.profile__icon}>?</div>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
