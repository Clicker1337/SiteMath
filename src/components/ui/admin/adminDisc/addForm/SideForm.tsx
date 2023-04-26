import s from './SideForm.module.scss';

export function SideForm() {
    return (
        <div>
            <form className={s.form}>
                <h2 className={s.form__title}>
                    Список дисциплин
                </h2>
            </form>
        </div>
    );
}
