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
                <h2 className={s.form__title}>
                    Информации о группе
                    <span>:</span>
                </h2>
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
                </section>
            </form>
        </div>
    );
}
