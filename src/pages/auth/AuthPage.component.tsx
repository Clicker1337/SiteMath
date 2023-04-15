import MainLayout from '../../components/layouts/MainLayout.component';
import Authorization from '../../components/ui/Auth/authorization/authorization';
import {useActions} from '../../hooks/useActions';

import s from './AuthPage.module.scss';

function AuthPage() {
    const {login} = useActions();

    return (
        <MainLayout selfClassName={s.auth}>
            <Authorization fetchCallback={login} />
        </MainLayout>
    );
}

export default AuthPage;
