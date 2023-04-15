import {SyntheticEvent} from 'react';

import s from './responseSection.module.scss';

interface IResponseSection {
  callback: (e: SyntheticEvent) => void;
}

function ResponseSection(props: IResponseSection) {
    return (
        <button
            className={s.button}
            onClick={props.callback}
        >
            ВОЙТИ
        </button>
    );
}

export default ResponseSection;
