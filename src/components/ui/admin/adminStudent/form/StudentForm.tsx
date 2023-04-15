import {SyntheticEvent, useEffect, useState} from 'react';
import {useRequest} from '../../../../../hooks/useRequest';
import Button from '../../../../common/button/button';
import DropDown from '../../../../common/dropDown/DropDown';
import Input from '../../../../common/input/input';
import s from './StudentForm.module.scss';
import GroupService from '../../../../../services/GroupService';
import StudentService, {IStudent} from '../../../../../services/StudentService';

interface IGroup {
    idGroup: number;
    numGroup: string;
}

export function StudentForm() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [idGroup, setIdGroup] = useState(0);

    const groupsRequest = useRequest<IGroup[]>(GroupService.fetchGroups);
    const studentRequest = useRequest<IStudent>(StudentService.fetchStudent);

    const onButtonClickHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        studentRequest.send(idGroup, name, lastName, middleName);
        //console.log(studentRequest.error);
    };

    const onDropDownClick = () => {
        groupsRequest.send();
    };

    useEffect(() => {
        //console.log(groupsRequest.loading);
    }, [groupsRequest]);

    return (
        <div>
            <form className={s.form}>
                <h2 className={s.form__title}>Добавить одного студента</h2>
                <Input
                    id="name"
                    placeholder="Введите имя студента"
                    title="Имя"
                    typeInput="text"
                    value={name}
                    onChangeValue={setName}
                />
                <Input
                    id="lastName"
                    placeholder="Введите фамилию студента"
                    title="Фамилия"
                    typeInput="text"
                    value={lastName}
                    onChangeValue={setLastName}
                />
                <Input
                    id="middleName"
                    placeholder="Введите отчество студента"
                    title="Отчество"
                    typeInput="text"
                    value={middleName}
                    onChangeValue={setMiddleName}
                />
                <DropDown
                    callback={setIdGroup}
                    onOpen={onDropDownClick}
                    items={groupsRequest.data || []}
                    title="Группа"
                    placeholder="Выберите группу"
                />
                <Button
                    text="ДОБАВИТЬ"
                    callback={onButtonClickHandler}
                />
            </form>
        </div>
    );
}
