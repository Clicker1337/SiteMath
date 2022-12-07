import React, { FC } from "react";
import Header from "../common/header/Header.component";

interface IMainLayoutProps {
  children?: React.ReactNode;
  selfClassName: string;
}

const MainLayout: FC<IMainLayoutProps> = ({ selfClassName, children }) => {
  return (
    <>
      <Header />
      <main className={selfClassName}>{children}</main>
    </>
  );
};

export default MainLayout;
