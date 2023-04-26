import s from './SideRemoveForm.module.scss';

interface ISideEditForm {
    //callback?: (args: any) => void;
    items: {
        idGroup: number;
        name: string;
        surname: string;
        patronymic: string;
    };
}

export function SideRemoveForm(item: ISideEditForm) {
    return (
        <div>
            <form className={s.form}>
                <h2 className={s.form__title}>Данные о студенте:</h2>
                <section className={s.form__info}>
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
                </section>

            </form>
        </div>
    );
}
