import React from 'react';
import {RootState} from '../../../../store/reducers';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {StudentForm} from './form/StudentForm';

function AdminStudent() {
    const selectDropDown = (state: RootState) => state.dropDown;

    const {
        addOption, editOption, removeOption,
    } = useTypedSelector(selectDropDown);

    switch (true) {
        case addOption:
            return (
                <div>
                    <StudentForm />
                </div>
            );
        case editOption:
            return (
                <div>
                    РЕДАКТИРУЕМ СТУДЕНТОВ
                </div>
            );
        case removeOption:
            return (
                <div>
                    УДАЛЯЕМ СТУДЕНТОВ
                </div>
            );
        default:
            return null;
    }
}

export default AdminStudent;
