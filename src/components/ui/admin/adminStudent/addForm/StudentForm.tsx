import {SyntheticEvent, useEffect, useState} from 'react';
import {useRequest} from '../../../../../hooks/useRequest';
import Button from '../../../../common/button/button';
import DropDown from '../../../../common/dropDown/DropDown';
import Input from '../../../../common/input/input';
import s from './StudentForm.module.scss';
import GroupService, {IGroup} from '../../../../../services/GroupService';
import StudentService, {IStudent} from '../../../../../services/StudentService';
import {SideForm} from './SideForm';

const options = [
    {
        name: 'Денис',
        lastName: 'Веремеенко',
        middleName: 'Игоревич',
    },
    {
        name: 'Денис',
        lastName: 'Веремеенко',
        middleName: 'Игоревич',
    },
];

export function StudentForm() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [idGroup, setIdGroup] = useState<number>();

    const groupsRequest = useRequest<IGroup[]>(GroupService.fetchGroups);
    const studentRequest = useRequest<IStudent>(StudentService.fetchAddStudent);
    const studentsRequest = useRequest<IStudent[]>(StudentService.fetchStudentsInGroup);

    const onButtonClickHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        studentRequest.send(idGroup, name, lastName, middleName);
    };

    const onDropDownClick = () => {
        groupsRequest.send();
    };

    if (idGroup) {
        studentsRequest.send(idGroup);
    }

    useEffect(() => {
        //console.log(groupsRequest.loading);
    }, [groupsRequest]);

    return (
        <div className={s.container}>
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
            <SideForm
                idGroup={idGroup || 5}
                items={options || studentsRequest.data}
            />
        </div>
    );
}
