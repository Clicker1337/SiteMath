import SVGSelector, {localSVG} from '../../../tools/svgSelector/SvgSelector';
import s from './header.module.scss';

function Header() {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__container}>
                    <section className={s.header__logo}>
                        {SVGSelector(localSVG.LOGOTYPE)}
                        <p className={s.header__name}>Math Tests</p>
                    </section>
                    <section className={`${s.header__profile} ${s.profile}`}>
                        <div className={s.profile__icon}>?</div>
                    </section>
                </div>
            </div>
        </header>
    );
}

export default Header;
