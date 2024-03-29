import clsx from 'clsx';
import {SyntheticEvent, useState} from 'react';

import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {AuthorizationType} from '../../../../store/action-creators/authorization';

import AuthInput from '../Input/authInput';
import ResponseSection from '../responseSection/responseSection';
import s from './authorization.module.scss';

interface IAuthorizationProps {
  fetchCallback: AuthorizationType;
}

function Authorization(props: IAuthorizationProps) {
    const [email, setEmail] = useState<string>('');

    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const {admin} = useTypedSelector((state) => state.authorization);
    const {prepod} = useTypedSelector((state) => state.authorization);
    const {student} = useTypedSelector((state) => state.authorization);

    const onClickHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        props.fetchCallback(email, password);
        switch (true) {
            case admin:
                navigate('/admin/student');
                break;
            case prepod:
                navigate('/');
                break;
            case student:
                navigate('/main');
                break;
            default:
                break;
        }
    };

    return (
        <div className="container">
            <div className={s.auth__container}>
                <form className={clsx(s.auth__form, s.form)}>
                    <h1 className={s.form__title}>Вход</h1>
                    <AuthInput
                        typeInput="email"
                        value={email}
                        onChangeValue={setEmail}
                    />
                    <AuthInput
                        typeInput="password"
                        value={password}
                        onChangeValue={setPassword}
                    />
                    <ResponseSection callback={onClickHandler} />
                </form>
            </div>
        </div>
    );
}

export default Authorization;
