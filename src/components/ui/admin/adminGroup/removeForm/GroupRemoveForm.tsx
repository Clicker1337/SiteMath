import {SyntheticEvent, useEffect, useState} from 'react';
import {useRequest} from '../../../../../hooks/useRequest';
import Button from '../../../../common/button/button';
import DropDown from '../../../../common/dropDown/DropDown';
import s from './GroupRemoveForm.module.scss';
import GroupService from '../../../../../services/GroupService';
import {SideRemoveForm} from './SideRemoveForm';

interface IGroup {
    idGroup: number;
    numGroup: string;
}

const option = {
    disciplines: [
        {
            id: 1,
            label: 'Математика',
        },
        {
            id: 2,
            label: 'Информатика',
        },
    ],
    groups: [
        {
            id: 1,
            label: '549',
        },
        {
            id: 2,
            label: '599',
        },
    ],
    name: 'Денис',
    surname: 'Веремеенко',
    patronomic: 'Игоревич',
};

export function GroupRemoveForm() {
    const [idGroup, setIdGroup] = useState(0);

    const groupsRequest = useRequest<IGroup[]>(GroupService.fetchGroups);

    const onButtonClickHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
    };

    const onDropDownClick = () => {
        groupsRequest.send();
    };

    useEffect(() => {
        //console.log(groupsRequest.loading);
    }, [groupsRequest]);
    //groupsRequest.data для выгрузки в dropDown
    return (
        <div className={s.container}>
            <form className={s.form}>
                <h2 className={s.form__title}>Удалить группу</h2>
                <DropDown
                    callback={setIdGroup}
                    onOpen={onDropDownClick}
                    items={[]}
                    title="Группа"
                    placeholder="Выберите группу"
                />
                <Button
                    text="УДАЛИТЬ"
                    callback={onButtonClickHandler}
                />

            </form>
            <SideRemoveForm items={option} />
        </div>
    );
}
