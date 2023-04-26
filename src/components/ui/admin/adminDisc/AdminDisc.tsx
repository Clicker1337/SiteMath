import React from 'react';
import {RootState} from '../../../../store/reducers';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {DiscForm} from './addForm/DiscForm';

import s from './AdminDisc.module.scss';
import {DiscEditForm} from './editForm/DiscEditForm';
import {DiscRemoveForm} from './removeForm/DiscRemoveForm';

function AdminDisc() {
    const selectDropDown = (state: RootState) => state.dropDown;

    const {
        addOption, editOption, removeOption,
    } = useTypedSelector(selectDropDown);

    switch (true) {
        case addOption:
            return (
                <div className={s.container}>
                    <DiscForm />
                </div>
            );
        case editOption:
            return (
                <div className={s.container}>
                    <DiscEditForm />
                </div>
            );
        case removeOption:
            return (
                <div className={s.container}>
                    <DiscRemoveForm />
                </div>
            );
        default:
            return null;
    }
}

export default AdminDisc;
