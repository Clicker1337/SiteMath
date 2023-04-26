import s from './SideEditForm.module.scss';

interface ISideEditForm {
    //callback?: (args: any) => void;
    items: {
        idGroup: number;
        name: string;
        surname: string;
        patronymic: string;
    };
}

export function SideEditForm(item: ISideEditForm) {
    return (
        <div>
            <section className={s.form}>
                <h2 className={s.form__title}>
                    Данные о студенте
                    <span>:</span>
                </h2>
                <div className={s.form__info}>
                    <p>
                        Группа:
                        {' '}
                        {item.items.idGroup}
                    </p>
                    <p>
                        Имя:
                        {' '}
                        {item.items.name}
                    </p>
                    <p>
                        Фамилия:
                        {' '}
                        {item.items.surname}
                    </p>
                    <p>
                        Отчество:
                        {' '}
                        {item.items.patronymic}
                    </p>
                </div>
            </section>
        </div>
    );
}
