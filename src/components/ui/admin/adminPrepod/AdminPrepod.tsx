import React from 'react';
import {RootState} from '../../../../store/reducers';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {PrepodForm} from './addForm/PrepodForm';

import s from './AdminPrepod.module.scss';
import {PrepodEditForm} from './editForm/PrepodEditForm';
import {PrepodRemoveForm} from './removeForm/PrepodRemoveForm';

function AdminPrepod() {
    const selectDropDown = (state: RootState) => state.dropDown;

    const {
        addOption, editOption, removeOption,
    } = useTypedSelector(selectDropDown);

    switch (true) {
        case addOption:
            return (
                <div className={s.container}>
                    <PrepodForm />
                </div>
            );
        case editOption:
            return (
                <div className={s.container}>
                    <PrepodEditForm />
                </div>
            );
        case removeOption:
            return (
                <div className={s.container}>
                    <PrepodRemoveForm />
                </div>
            );
        default:
            return null;
    }
}

export default AdminPrepod;
