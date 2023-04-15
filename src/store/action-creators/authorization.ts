import axios from 'axios';

import {AppDispatch} from '..';
import {localStorageApi} from '../../api/localStorageApi';
import BackendApi from '../../types/classes/BackendApi';
import {ErrorMessages} from '../../types/enums/ErrorMessages';
import {AuthResponse} from '../../types/interfaces/Authorization';
import {$api} from '../http';
import AuthorizationSlice from '../reducers/authorizationSlice';

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthorizationSlice.actions.login());
        const response = await $api.post<AuthResponse>(
            BackendApi.LOCATION + BackendApi.LOGIN,
            {
                login: username,
                password,
            },
        );
        localStorageApi.setAccessToken(response.data.accessToken);
        switch (response.data.user.roles[0].name) {
            case 'ROLE_STUDENT':
                dispatch(
                    AuthorizationSlice.actions.studentLoginSuccess(response.data.user),
                );
                break;
            case 'ROLE_ADMIN':
                dispatch(
                    AuthorizationSlice.actions.adminLoginSuccess(response.data.user),
                );
                break;
            case 'ROLE_TEACHER':
                dispatch(
                    AuthorizationSlice.actions.prepodLoginSuccess(response.data.user),
                );
                break;

            default:
                alert('Нет подходящей роли');
        }
    } catch (error) {
        dispatch(AuthorizationSlice.actions.loginError(ErrorMessages.LOGIN));
    }
};

export const refresh = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthorizationSlice.actions.refresh());
        const response = await axios.post<AuthResponse>(
            BackendApi.LOCATION + BackendApi.REFRESH,
            {
                accessToken: `${localStorage.getItem('token')}`,
            },
            {
                withCredentials: true,
            },
        );

        if (!response.data) {
            throw new Error(ErrorMessages.REFRESH_NOT_VALID);
        }

        localStorage.setItem('token', response.data.accessToken);

        switch (response.data.user.roles[0].roleId) {
            case 1:
                dispatch(AuthorizationSlice.actions.studentRefreshSuccess(response.data.user));
                break;
            case 2:
                dispatch(AuthorizationSlice.actions.adminRefreshSuccess(response.data.user));
                break;
            case 3:
                dispatch(AuthorizationSlice.actions.prepodRefreshSuccess(response.data.user));
                break;

            default:
                alert('Нет подходящей роли');
        }
    } catch (error: Error | any) {
        if (error instanceof Error) {
            dispatch(AuthorizationSlice.actions.refreshError(error.message));
        }
    }
};

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthorizationSlice.actions.logout());

        await axios.post(BackendApi.LOCATION + BackendApi.LOGOUT);

        dispatch(AuthorizationSlice.actions.logoutSuccess());
    } catch (error) {
        dispatch(AuthorizationSlice.actions.logoutError(ErrorMessages.LOGOUT));
    }
};

export type AuthorizationType = typeof login;
