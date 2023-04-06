import clsx from "clsx";
import React, { FC, SyntheticEvent, useState } from "react";


import { AuthorizationType } from "../../../../store/action-creators/authorization";

import AuthInput from "../Input/authInput";
import ResponseSection from "../responseSection/responseSection";
import s from "./authorization.module.scss";

interface IAuthorizationProps {
  fetchCallback: AuthorizationType;
}

const Authorization: FC<IAuthorizationProps> = ({fetchCallback}) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClickHandler = (e: SyntheticEvent): void => {
    e.preventDefault();
    
    fetchCallback(email, password);

  };

  return (
      <div className="container">
        <div className={s.auth__container}>
          <form className={clsx(s.auth__form, s.form)}>
            <h1 className={s.form__title}>Вход</h1>
            <AuthInput typeInput="email" value={email} onChangeValue={setEmail} />
            <AuthInput typeInput="password" value={password} onChangeValue={setPassword} />
            <ResponseSection callback={onClickHandler}/>
          </form>
        </div>
      </div>
  );
};

export default Authorization;
