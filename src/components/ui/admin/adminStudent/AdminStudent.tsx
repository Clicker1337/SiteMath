import React from 'react';
import {RootState} from '../../../../store/reducers';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {StudentForm} from './addForm/StudentForm';

import s from './AdminStudent.module.scss';
import {StudentEditForm} from './editForm/StudentEditForm';
import {StudentRemoveForm} from './removeForm/StudentRemoveForm';

function AdminStudent() {
    const selectDropDown = (state: RootState) => state.dropDown;

    const {
        addOption, editOption, removeOption,
    } = useTypedSelector(selectDropDown);

    switch (true) {
        case addOption:
            return (
                <div className={s.container}>
                    <StudentForm />
                </div>
            );
        case editOption:
            return (
                <div className={s.container}>
                    <StudentEditForm />
                </div>
            );
        case removeOption:
            return (
                <div className={s.container}>
                    <StudentRemoveForm />
                </div>
            );
        default:
            return null;
    }
}

export default AdminStudent;
