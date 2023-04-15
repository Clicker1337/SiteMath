import {AxiosResponse} from 'axios';
import $api from '../store/http';
import {AuthResponse} from '../types/models/response/AuthResponse';

export default class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {login, password});
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/logout');
    }
}
