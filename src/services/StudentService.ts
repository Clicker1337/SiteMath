import {AxiosResponse} from 'axios';
import $api from '../store/http';
import BackendApi from '../types/classes/BackendApi';

export interface IStudent {
    idGroup: number,
    name: string,
    surname: string,
    patronomic: string,
}

export default class StudentService {
    static async fetchStudent(
        IdGroup: number,
        name: string,
        surname: string,
        patronomic: string,
    ): Promise<AxiosResponse<IStudent>> {
        return $api.post<IStudent>(
            BackendApi.LOCATION + BackendApi.ADDSTUDENT,
            {
                IdGroup,
                name,
                surname,
                patronomic,
            },
        );
    }
}
