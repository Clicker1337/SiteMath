import React, { FC, useState } from "react";

import s from "./authInput.module.scss";

interface IAuthInput {
  typeInput: string;
  value: any;
  onChangeValue: React.Dispatch<React.SetStateAction<any>>;
}

const AuthInput: FC<IAuthInput> = ({ typeInput, value, onChangeValue }) => {
  if (typeInput === "email") {
    return (
      <input
        className={s.input}
        placeholder="Введите логин"
        type="text"
        id="login"
        name="login"
        value={value}
        onChange={(e) => onChangeValue(e.currentTarget.value)}
      />
    );
  }
  return (
    <input
      className={s.input}
      placeholder="Введите пароль"
      type="password"
      name="password"
      id="password"
      value={value}
      onChange={(e) => onChangeValue(e.currentTarget.value)}
    />
  );
};

export default AuthInput;
