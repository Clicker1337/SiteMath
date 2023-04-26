import s from './SideRemoveForm.module.scss';

interface ISideEditForm {
    //callback?: (args: any) => void;
    items: {
        disciplines: {
            id: number;
            label: string;
        }[];
        groups: {
            id: number;
            label: string;
        }[];
        name: string;
        surname: string;
        patronomic: string;
    };
}

export function SideRemoveForm(items: ISideEditForm) {
    return (
        <div>
            <form className={s.form}>
                <h2 className={s.form__title}>Данные о преподавателе:</h2>
                <section className={s.form__info}>
                    <div>
                        Дисциплины:
                        {items.items.disciplines.map((prop, itemIndex) => (
                            <span
                                key={itemIndex}
                            >
                                {' ' + prop.label}
                            </span>
                        ))}
                    </div>
                    <div>
                        Группы:
                        {items.items.groups.map((prop, itemIndex) => (
                            <span
                                key={itemIndex}
                            >
                                {' ' + prop.label}
                            </span>
                        ))}
                    </div>
                    <p>
                        Имя:
                        {' '}
                        {items.items.name}
                    </p>
                    <p>
                        Фамилия:
                        {' '}
                        {items.items.surname}
                    </p>
                    <p>
                        Отчество:
                        {' '}
                        {items.items.patronomic}
                    </p>
                </section>

            </form>
        </div>
    );
}
