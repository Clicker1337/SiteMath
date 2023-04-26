import {SyntheticEvent, useEffect, useState} from 'react';
import {useRequest} from '../../../../../hooks/useRequest';
import Button from '../../../../common/button/button';
import DropDown from '../../../../common/dropDown/DropDown';
import Input from '../../../../common/input/input';
import s from './PrepodEditForm.module.scss';
import GroupService, {IGroup} from '../../../../../services/GroupService';
import StudentService, {IStudent} from '../../../../../services/StudentService';
import {SideEditForm} from './SideEditForm';

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

export function PrepodEditForm() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [idGroup, setIdGroup] = useState<number>();
    const [idStudent, setIdStudent] = useState<number>();
    const [newIdGroup, setNewIdGroup] = useState<number>();

    const groupsRequest = useRequest<IGroup[]>(GroupService.fetchGroups);
    const studentsRequest = useRequest<IStudent[]>(StudentService.fetchStudentsInGroup);
    const studentRequest = useRequest<IStudent>(StudentService.fetchAddStudent);

    const onButtonClickHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        studentRequest.send(newIdGroup, name, lastName, middleName);
    };

    const onDropDownClick = () => {
        groupsRequest.send();
    };

    const onStudentDropDown = () => {
        studentsRequest.send();
        //Поиск студента в группе по idGroup
    };

    useEffect(() => {
        //console.log(groupsRequest.loading);
    }, [groupsRequest]);
    useEffect(() => {
        //console.log(groupsRequest.loading);
    }, [studentsRequest]);

    return (
        <div className={s.container}>
            <form className={s.form}>
                <h2 className={s.form__title}>Редактировать одного студента</h2>
                <DropDown
                    callback={setIdGroup}
                    onOpen={onStudentDropDown}
                    items={[]}
                    title="Преподаватели"
                    placeholder="Выберите преподавателя"
                />
                <Input
                    id="name"
                    placeholder="Введите имя преподавателя"
                    title="Имя"
                    typeInput="text"
                    value={name}
                    onChangeValue={setName}
                />
                <Input
                    id="lastName"
                    placeholder="Введите фамилию преподавателя"
                    title="Фамилия"
                    typeInput="text"
                    value={lastName}
                    onChangeValue={setLastName}
                />
                <Input
                    id="middleName"
                    placeholder="Введите отчество преподавателя"
                    title="Отчество"
                    typeInput="text"
                    value={middleName}
                    onChangeValue={setMiddleName}
                />
                <DropDown
                    callback={setNewIdGroup}
                    onOpen={onDropDownClick}
                    items={groupsRequest.data || []}
                    title="Дисциплины"
                    placeholder="Выберите дисциплину"
                />
                <Button
                    text="РЕДАКТИРОВАТЬ"
                    callback={onButtonClickHandler}
                />
            </form>
            <SideEditForm items={option} />
        </div>
    );
}
