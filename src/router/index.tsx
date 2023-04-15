import {Navigate} from 'react-router-dom';
import AuthPage from '../pages/auth/AuthPage.component';

import {IRoute} from '../types/models/IRoute';
import TestingPage from '../pages/testing page/TestingPage';
import MainScreen from '../pages/main screen/MainScreen.component';
import AdminPanel from '../pages/admin/adminPanel';
import AdminGroup from '../pages/admin/adminGroup/adminGroup';
import AdminPrepod from '../pages/admin/adminPrepod/adminPrepod';
import AdminDisc from '../pages/admin/adminDisc/adminDisc';

export const publicRoutes: IRoute[] = [
    {id: 1, path: '/auth', component: <AuthPage />},
    {id: 2, path: '*', component: <Navigate to="/auth" />},
];

export const adminRoutes: IRoute[] = [
    {id: 1, path: '/admin/student', component: <AdminPanel />},
    {id: 2, path: '/admin/group', component: <AdminGroup />},
    {id: 3, path: '/admin/prepod', component: <AdminPrepod />},
    {id: 4, path: '/admin/discipline', component: <AdminDisc />},
];
export const prepodRoutes: IRoute[] = [

];
export const studentRoutes: IRoute[] = [
    {id: 1, path: '/main', component: <MainScreen />},
    {id: 2, path: '/test', component: <TestingPage />},
    {id: 3, path: '*', component: <Navigate to="/main" />},
];
