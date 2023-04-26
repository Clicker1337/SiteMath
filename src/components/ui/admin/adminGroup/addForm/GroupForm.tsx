import {SyntheticEvent, useEffect, useState} from 'react';
import {useRequest} from '../../../../../hooks/useRequest';
import Button from '../../../../common/button/button';
import DropDown from '../../../../common/dropDown/DropDown';
import Input from '../../../../common/input/input';
import s from './GroupForm.module.scss';
import GroupService from '../../../../../services/GroupService';
import StudentService, {IStudent} from '../../../../../services/StudentService';
import {SideForm} from './SideForm';

interface IGroup {
    idGroup: number;
    numGroup: string;
}

export function GroupForm() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [idDiscipline, setIdDiscipline] = useState(0);

    const groupsRequest = useRequest<IGroup[]>(GroupService.fetchGroups);
    const studentRequest = useRequest<IStudent>(StudentService.fetchAddStudent);

    const onButtonClickHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        studentRequest.send(idDiscipline, name, lastName, middleName);
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
                <h2 className={s.form__title}>Добавить новую группу</h2>
                <Input
                    id="name"
                    placeholder="Введите название группы"
                    title="Название группы"
                    typeInput="text"
                    value={name}
                    onChangeValue={setName}
                />
                <DropDown
                    callback={setIdDiscipline}
                    onOpen={onDropDownClick}
                    items={[]}
                    title="Дисциплины"
                    placeholder="Выберите дисциплину"
                />
                <Button
                    text="ДОБАВИТЬ"
                    callback={onButtonClickHandler}
                />

            </form>
            <SideForm />
        </div>
    );
}
