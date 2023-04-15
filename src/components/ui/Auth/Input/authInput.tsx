import React from 'react';

import s from './authInput.module.scss';

interface IAuthInput {
  typeInput: string;
  value: any;
  onChangeValue: React.Dispatch<React.SetStateAction<any>>;
}

function AuthInput(props: IAuthInput) {
    if (props.typeInput === 'email') {
        return (
            <input
                className={s.input}
                placeholder="Введите логин"
                type="text"
                id="login"
                name="login"
                value={props.value}
                onChange={(e) => props.onChangeValue(e.currentTarget.value)}
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
            value={props.value}
            onChange={(e) => props.onChangeValue(e.currentTarget.value)}
        />
    );
}

export default AuthInput;
