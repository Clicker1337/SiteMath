import React from 'react';

import s from './input.module.scss';

interface IAuthInput {
    id: any;
    title: string;
    placeholder: string;
    typeInput: string;
    value: any;
    onChangeValue: React.Dispatch<React.SetStateAction<any>>;
}

function Input(props: IAuthInput) {
    return (
        <div>
            <p className={s.title}>{props.title}</p>
            <input
                className={s.input}
                placeholder={props.placeholder}
                type={props.typeInput}
                name={props.title}
                id={props.id}
                value={props.value}
                onChange={(e) => props.onChangeValue(e.currentTarget.value)}
            />
        </div>
    );
}

export default Input;
