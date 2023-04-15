import axios from 'axios';

import BackendApi from '../../types/classes/BackendApi';

import {AuthResponse} from '../../types/interfaces/Authorization';

export const $api = axios.create({
    withCredentials: true,
    baseURL: BackendApi.LOCATION,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401
            && error.config
            && !error.config._isRetry
        ) {
            try {
                const response = await axios.post<AuthResponse>(
                    BackendApi.LOCATION + BackendApi.REFRESH,
                    {
                        accessToken: `${localStorage.getItem('token')}`,
                    },
                    {
                        withCredentials: true,
                    },
                );
                localStorage.setItem('token', response.data.accessToken);
                return $api.request(originalRequest);
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН');
            }
        }
        throw error;
    },
);

export default $api;
