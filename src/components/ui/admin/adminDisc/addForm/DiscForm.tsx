import {SyntheticEvent, useEffect, useState} from 'react';
import {useRequest} from '../../../../../hooks/useRequest';
import Button from '../../../../common/button/button';
import Input from '../../../../common/input/input';
import s from './DiscForm.module.scss';
import GroupService from '../../../../../services/GroupService';
import StudentService, {IStudent} from '../../../../../services/StudentService';
import {SideForm} from './SideForm';

interface IGroup {
    idGroup: number;
    numGroup: string;
}

export function DiscForm() {
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

    useEffect(() => {
        //console.log(groupsRequest.loading);
    }, [groupsRequest]);
    //groupsRequest.data для выгрузки в dropDown
    return (
        <div className={s.container}>
            <form className={s.form}>
                <h2 className={s.form__title}>Добавить новую дисциплину</h2>
                <Input
                    id="name"
                    placeholder="Введите название дисциплины"
                    title="Название дисциплины"
                    typeInput="text"
                    value={name}
                    onChangeValue={setName}
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
