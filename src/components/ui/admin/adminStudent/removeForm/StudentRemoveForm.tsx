import {SyntheticEvent, useEffect, useState} from 'react';
import {useRequest} from '../../../../../hooks/useRequest';
import Button from '../../../../common/button/button';
import DropDown from '../../../../common/dropDown/DropDown';
import s from './StudentRemoveForm.module.scss';
import GroupService from '../../../../../services/GroupService';
import StudentService, {IStudent} from '../../../../../services/StudentService';
import {SideRemoveForm} from './SideRemoveForm';

interface IGroup {
    idGroup: number;
    numGroup: string;
}

const option = {
    idGroup: 549,
    name: 'Денис',
    surname: 'Веремеенко',
    patronymic: 'Игоревич',
};

export function StudentRemoveForm() {
    const [idGroup, setIdGroup] = useState(0);
    const [idStudent, setIdStudent] = useState(0);

    const groupsRequest = useRequest<IGroup[]>(GroupService.fetchGroups);
    const studentsRequest = useRequest<IStudent[]>(StudentService.fetchStudentsInGroup);
    const studentDelete = useRequest(StudentService.fetchDeleteStudent);
    const studentInfo = useRequest<IStudent>(StudentService.fetchGetStudentInfo);

    const onButtonClickHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        studentDelete.send(idStudent);
    };

    const onStudentDropDown = () => {
        studentsRequest.send(idGroup);
    };

    const onDropDownClick = () => {
        groupsRequest.send();
    };

    const callbackStudentDropDown = (arg: number) => {
        studentInfo.send(arg);
        setIdStudent(arg);
    };

    useEffect(() => {
        //console.log(groupsRequest.loading);
    }, [groupsRequest]);

    return (
        <div className={s.container}>
            <form className={s.form}>
                <h2 className={s.form__title}>Удалить одного студента</h2>
                <DropDown
                    callback={setIdGroup}
                    onOpen={onDropDownClick}
                    items={[] || groupsRequest.data}
                    title="Группа"
                    placeholder="Выберите группу"
                />
                <DropDown
                    callback={callbackStudentDropDown}
                    onOpen={onStudentDropDown}
                    items={[]}
                    title="Студент"
                    placeholder="Выберите студента"
                />
                <Button
                    text="УДАЛИТЬ"
                    callback={onButtonClickHandler}
                />

            </form>
            <SideRemoveForm items={option || studentInfo.data} />
        </div>
    );
}
