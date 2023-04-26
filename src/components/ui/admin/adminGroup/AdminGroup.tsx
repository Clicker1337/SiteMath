import React from 'react';
import {RootState} from '../../../../store/reducers';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {GroupForm} from './addForm/GroupForm';

import s from './AdminGroup.module.scss';
import {GroupEditForm} from './editForm/GroupEditForm';
import {GroupRemoveForm} from './removeForm/GroupRemoveForm';

function AdminGroup() {
    const selectDropDown = (state: RootState) => state.dropDown;

    const {
        addOption, editOption, removeOption,
    } = useTypedSelector(selectDropDown);

    switch (true) {
        case addOption:
            return (
                <div className={s.container}>
                    <GroupForm />
                </div>
            );
        case editOption:
            return (
                <div className={s.container}>
                    <GroupEditForm />
                </div>
            );
        case removeOption:
            return (
                <div className={s.container}>
                    <GroupRemoveForm />
                </div>
            );
        default:
            return null;
    }
}

export default AdminGroup;
