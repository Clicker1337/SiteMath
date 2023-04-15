import {SyntheticEvent} from 'react';

import s from './button.module.scss';

interface IResponseSection {
    callback: (e: SyntheticEvent) => void;
    text: string;
}

function Button(props: IResponseSection) {
    return (
        <button
            className={s.button}
            onClick={props.callback}
        >
            {props.text}
        </button>
    );
}

export default Button;
