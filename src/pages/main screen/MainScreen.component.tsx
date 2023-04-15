import React from 'react';
import MainLayout from '../../components/layouts/MainLayout.component';
import s from './MainScreen.module.scss';

function MainScreen() {
    return (
        <MainLayout selfClassName={s.auth}>
            <div className="container" />
        </MainLayout>
    );
}

export default MainScreen;
