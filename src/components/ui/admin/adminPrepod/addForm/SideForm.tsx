import s from './SideForm.module.scss';

export function SideForm() {
    return (
        <div>
            <form className={s.form}>
                <h2 className={s.form__title}>
                    Список преподавателей
                </h2>
            </form>
        </div>
    );
}
