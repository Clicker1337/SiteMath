/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import s from './NavigationPanel.module.scss';

interface IPage {
    currentPage: 'student' | 'prepod' | 'group' | 'discipline';
}

const ROUTE_STUDENT = 'student';
const ROUTE_PREPOD = 'prepod';
const ROUTE_GROUP = 'group';
const ROUTE_DISCIPLINE = 'discipline';

const navigationItems = [
    {
        label: 'Студенты',
        route: ROUTE_STUDENT,
    },
    {
        label: 'Преподаватели',
        route: ROUTE_PREPOD,
    },
    {
        label: 'Группы',
        route: ROUTE_GROUP,
    },
    {
        label: 'Дисциплины',
        route: ROUTE_DISCIPLINE,
    },
];

function NavigationPanel(props: IPage) {
    const navigate = useNavigate();

    const onClickHandler = (event: React.MouseEvent) => {
        const target = event.target as HTMLButtonElement;

        if (!target.dataset.navigating) {
            return;
        }

        const navigating = target.dataset.navigating;

        switch (navigating) {
            case ROUTE_STUDENT:
                navigate('/admin/student');
                break;

            case ROUTE_PREPOD:
                navigate('/admin/prepod');
                break;

            case ROUTE_GROUP:
                navigate('/admin/group');
                break;

            case ROUTE_DISCIPLINE:
                navigate('/admin/discipline');
                break;

            default: break;
        }
    };

    return (
        <div className="container">
            <div className={s.navPanel}>
                <section
                    className={s.navPanel__links}
                    onClick={onClickHandler}
                >
                    {navigationItems.map((item, itemIndex) => (
                        <button
                            className={
                                props.currentPage === item.route
                                    ? `${s.navPanel__linkActive}`
                                    : `${s.navPanel__link}`
                            }
                            data-navigating={item.route}
                            key={itemIndex}
                        >
                            {item.label}
                        </button>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default NavigationPanel;
