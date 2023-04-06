
import AuthPage from "../pages/auth/AuthPage.component";
import { Navigate } from "react-router-dom";


import { IRoute } from "../types/models/IRoute";
import TestingPage from "../pages/testing page/TestingPage";
import MainScreen from "../pages/main screen/MainScreen.component";


export const publicRoutes: IRoute[] = [
    {id: 1, path: "/auth", component: <AuthPage />},
    {id: 2, path: "*", component: <Navigate to={"/auth"} />},
]

export const privateRoutes: IRoute[] = [
    {id: 1, path: "/main", component: <MainScreen/>},
    {id: 2, path: "/test", component: <TestingPage/>},
    {id: 3, path: "*", component: <Navigate to={"/main"} />}
]