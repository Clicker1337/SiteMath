import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IUser} from '../../types/models/IUser';
import {IAuthorizationState} from '../../types/states/IAuthorizationState';

const initialState: IAuthorizationState = {
    loading: false,
    error: '',
    admin: false,
    prepod: false,
    student: false,
    user: {} as IUser,
};

export const AuthorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        refresh: (state) => {
            state.loading = true;
            state.error = '';
        },
        studentRefreshSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.error = '';
            state.student = true;
            state.user = action.payload;
        },
        prepodRefreshSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.error = '';
            state.prepod = true;
            state.user = action.payload;
        },
        adminRefreshSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.error = '';
            state.admin = true;
            state.user = action.payload;
        },
        refreshError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.student = false;
            state.prepod = false;
            state.admin = false;
            state.user = {} as IUser;
        },
        login: (state) => {
            state.loading = true;
            state.error = '';
        },
        studentLoginSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.error = '';
            state.student = true;
            state.user = action.payload;
        },
        prepodLoginSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.error = '';
            state.prepod = true;
            state.user = action.payload;
        },
        adminLoginSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.error = '';
            state.admin = true;
            state.user = action.payload;
        },
        loginError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.user = {} as IUser;
        },
        logout: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state) => {
            state.loading = false;
            state.error = '';
            state.student = false;
            state.prepod = false;
            state.admin = false;
            state.user = {} as IUser;
        },
        logoutError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default AuthorizationSlice;
