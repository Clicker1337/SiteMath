import {SyntheticEvent, useState} from 'react';
import {useRequest} from '../../../../../hooks/useRequest';
import Button from '../../../../common/button/button';
import DropDown from '../../../../common/dropDown/DropDown';
import Input from '../../../../common/input/input';
import s from './StudentEditForm.module.scss';
import GroupService, {IGroup} from '../../../../../services/GroupService';
import StudentService, {IStudent} from '../../../../../services/StudentService';
import {SideEditForm} from './SideEditForm';

const option = {
    idGroup: 549,
    name: 'Денис',
    surname: 'Веремеенко',
    patronymic: 'Игоревич',
};

export function StudentEditForm() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [idGroup, setIdGroup] = useState<number>();
    const [idStudent, setIdStudent] = useState<number>();
    const [newIdGroup, setNewIdGroup] = useState<number>();

    const groupsRequest = useRequest<IGroup[]>(GroupService.fetchGroups);
    const studentsRequest = useRequest<IStudent[]>(StudentService.fetchStudentsInGroup);
    const studentEditRequest = useRequest<IStudent>(StudentService.fetchEditStudent);
    const studentInfo = useRequest<IStudent>(StudentService.fetchGetStudentInfo);

    const onButtonClickHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        studentEditRequest.send(idStudent, newIdGroup, name, lastName, middleName);
    };

    const onDropDownClick = () => {
        groupsRequest.send();
    };

    const onStudentDropDown = () => {
        studentsRequest.send(idGroup);
    };

    const callbackStudentDropDown = (arg: number) => {
        studentInfo.send(arg);
        setIdStudent(arg);
    };

    // useEffect(() => {
    //     console.log(groupsRequest.loading);
    // }, [groupsRequest]);

    return (
        <div className={s.container}>
            <form className={s.form}>
                <h2 className={s.form__title}>Редактировать одного студента</h2>
                <DropDown
                    callback={setIdGroup}
                    onOpen={onDropDownClick}
                    items={groupsRequest.data || []}
                    title="Группа"
                    placeholder="Выберите группу"
                />
                <DropDown
                    callback={callbackStudentDropDown}
                    onOpen={onStudentDropDown}
                    items={[] || studentsRequest.data}
                    title="Студент"
                    placeholder="Выберите студента"
                />
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
                    callback={setNewIdGroup}
                    items={groupsRequest.data || []}
                    title="Группа"
                    placeholder="Выберите группу"
                />
                <Button
                    text="РЕДАКТИРОВАТЬ"
                    callback={onButtonClickHandler}
                />
            </form>
            <SideEditForm items={option || studentInfo.data} />
        </div>
    );
}
