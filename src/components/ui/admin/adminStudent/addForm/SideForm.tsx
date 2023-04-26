import s from './SideForm.module.scss';

interface ISideFormProps {
    idGroup: number;
    items: {
        name: string
        lastName: string
        middleName: string
    }[];
}

export function SideForm(props: ISideFormProps) {
    return (
        <div>
            <section className={s.sideForm}>
                <h2 className={s.sideForm__title}>
                    Список студентов в группе
                    {' '}
                    <span>{props.idGroup}</span>
                </h2>
                <div className={s.sideForm__list}>
                    {props.items.map((item, itemIndex) => (
                        <p key={itemIndex}>
                            {item.name}
                            {' '}
                            {item.lastName}
                            {' '}
                            {item.middleName}
                        </p>
                    ))}
                </div>
            </section>
        </div>
    );
}
