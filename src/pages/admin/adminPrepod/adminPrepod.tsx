import clsx from 'clsx';
import DropDown from '../../../components/common/dropDown/DropDown';
import MainLayout from '../../../components/layouts/MainLayout.component';
import AdminPrepod from '../../../components/ui/admin/adminPrepod/AdminPrepod';
import NavigationPanel from '../../../components/ui/admin/navigationPanel/NavigationPanel';
import {useActions} from '../../../hooks/useActions';
import {dropDownIdOption, dropDownOptions} from '../../../types/enums/dropDownOptions';

import s from './adminPrepod.module.scss';

const items = [
    {
        id: dropDownIdOption.ADD,
        label: dropDownOptions.ADD_OPTION,
    },
    {
        id: dropDownIdOption.EDIT,
        label: dropDownOptions.EDIT_OPTION,
    },
    {
        id: dropDownIdOption.REMOVE,
        label: dropDownOptions.REMOVE_OPTION,
    },
];

function AdminPanelPrepod() {
    const {option} = useActions();

    return (
        <MainLayout selfClassName={s.auth}>
            <NavigationPanel currentPage="prepod" />
            <div className="container">
                <div className={clsx(s.container)}>
                    <section className={s.container__header}>
                        <p className={s.container__header__title}>Преподаватели</p>
                        <DropDown
                            callback={option}
                            items={items}
                            className={clsx(s.container__DropDown)}
                        />
                    </section>
                    <section className={s.container__form}>
                        <AdminPrepod />
                    </section>
                </div>
            </div>
        </MainLayout>
    );
}

export default AdminPanelPrepod;
