import React from 'react';
import Header from '../common/header/Header.component';

interface IMainLayoutProps {
  children?: React.ReactNode;
  selfClassName: string;
}

function MainLayout(props: IMainLayoutProps) {
    return (
        <>
            <Header />
            <main className={props.selfClassName}>{props.children}</main>
        </>
    );
}

export default MainLayout;
