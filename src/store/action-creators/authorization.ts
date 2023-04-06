import axios from "axios";

import { AppDispatch } from "..";
import { localStorageApi } from "../../api/localStorageApi";
import BackendApi from "../../types/classes/BackendApi";
import { ErrorMessages } from "../../types/enums/ErrorMessages";
import { AuthResponse } from "../../types/interfaces/Authorization";
import { $api } from "../http";
import AuthorizationSlice from "../reducers/authorizationSlice";

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthorizationSlice.actions.login());
      const response = await $api.post<AuthResponse>(BackendApi.LOGIN, {
        email: email,
        password: password,
      });
      localStorageApi.setAccessToken(response.data.accessToken);

      if (response.data.user.role === "student") {
        dispatch(AuthorizationSlice.actions.studentLoginSuccess(response.data.user));
      }
      if (response.data.user.role === "prepod") {
        dispatch(AuthorizationSlice.actions.prepodLoginSuccess(response.data.user));
      }
      if (response.data.user.role === "admin") {
        dispatch(AuthorizationSlice.actions.adminLoginSuccess(response.data.user));
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
        accessToken: `${localStorage.getItem("token")}`,
      },
      {
        withCredentials: true,
      }
    );

    if (!response.data) throw new Error(ErrorMessages.REFRESH_NOT_VALID);

    localStorage.setItem("token", response.data.accessToken);

    dispatch(AuthorizationSlice.actions.refreshSuccess(response.data.user));
  } catch (error: Error | any) {
    if (error instanceof Error)
      dispatch(AuthorizationSlice.actions.refreshError(error.message));

    dispatch(
      AuthorizationSlice.actions.registrationError(ErrorMessages.REFRESH)
    );
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
