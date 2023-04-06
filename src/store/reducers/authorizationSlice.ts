import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../types/models/IUser";
import { IAuthorizationState } from "../../types/states/IAuthorizationState";

const initialState: IAuthorizationState = {
    loading: false,
    error: "",
    isAuthorized: false,
    admin: false,
    prepod: false,
    student: false,
    user: {} as IUser,
  };
  
  export const AuthorizationSlice = createSlice({
    name: "authorization",
    initialState: initialState,
    reducers: {
      registration: (state) => {
        state.loading = true;
        state.error = "";
        state.isAuthorized = false;
      },
      registrationSuccess: (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.error = "";
        state.isAuthorized = false;
        state.user = action.payload;
      },
      registrationError: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthorized = false;
      },
      refresh: (state) => {
        state.loading = true;
        state.error = "";
      },
      refreshSuccess: (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.error = "";
        state.isAuthorized = true;
        state.user = action.payload;
      },
      refreshError: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthorized = false;
        state.user = {} as IUser;
      },
      login: (state) => {
        state.loading = true;
        state.error = "";
      },
      studentLoginSuccess: (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.error = "";
        state.isAuthorized = true;
        state.student = true;
        state.prepod = false;
        state.admin = false;
        state.user = action.payload;
      },
      prepodLoginSuccess: (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.error = "";
        state.isAuthorized = true;
        state.student = false;
        state.prepod = true;
        state.admin = false;
        state.user = action.payload;
      },
      adminLoginSuccess: (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.error = "";
        state.isAuthorized = true;
        state.student = false;
        state.prepod = false;
        state.admin = true;
        state.user = action.payload;
      },
      loginError: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthorized = false;
        state.user = {} as IUser;
      },
      logout: (state) => {
        state.loading = true;
      },
      logoutSuccess: (state) => {
        state.loading = false;
        state.error = "";
        state.isAuthorized = false;
        state.user = {} as IUser;
      },
      logoutError: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export default AuthorizationSlice;