import React, {useState} from 'react';
import {BlockMath} from 'react-katex';
import s from './MathInput.module.scss';

function MathInput() {
    const [f, setF] = useState('f');
    const [a, setA] = useState('a');
    const [b, setB] = useState('b');

    const expression = '\\frac{' + f + '(x^{' + b + '})}{' + a + '}';

    return (
        <>
            <div className={s.wrapper}>
                <input
                    className={s.input}
                    placeholder="Введите f"
                    onChange={(e) => setF(e.target.value)}
                />
                <input
                    className={s.input}
                    placeholder="Введите a"
                    onChange={(e) => setA(e.target.value)}
                />
                <input
                    className={s.input}
                    placeholder="Введите b"
                    onChange={(e) => setB(e.target.value)}
                />
            </div>
            <BlockMath>{expression}</BlockMath>
        </>
    );
}

export default MathInput;
