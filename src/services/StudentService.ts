import {AxiosResponse} from 'axios';
import $api from '../store/http';
import BackendApi from '../types/classes/BackendApi';

export interface IStudent {
    idStudent: number;
    idGroup: number,
    name: string,
    surname: string,
    patronymic: string,
}

export default class StudentService {
    static async fetchGetStudentInfo(
        idStudent: number,
    ): Promise<AxiosResponse<IStudent[]>> {
        return $api.post<IStudent[]>(
            BackendApi.LOCATION + BackendApi.GET_STUDENT_INFO,
            {
                idStudent,
            },
        );
    }

    static async fetchAddStudent(
        idGroup: number,
        name: string,
        surname: string,
        patronymic: string,
    ): Promise<AxiosResponse<IStudent>> {
        return $api.post<IStudent>(
            BackendApi.LOCATION + BackendApi.ADD_STUDENT,
            {
                idGroup,
                name,
                surname,
                patronymic,
            },
        );
    }

    static async fetchStudentsInGroup(
        idGroup: number,
    ): Promise<AxiosResponse<IStudent[]>> {
        return $api.post<IStudent[]>(
            BackendApi.LOCATION + BackendApi.GET_STUDENTS_IN_GROUP,
            {
                idGroup,
            },
        );
    }

    static async fetchEditStudent(
        idStudent: number,
        idGroup: number,
        name: string,
        surname: string,
        patronymic: string,
    ): Promise<AxiosResponse<IStudent>> {
        return $api.put<IStudent>(
            BackendApi.LOCATION + BackendApi.EDIT_STUDENT,
            {
                idStudent,
                idGroup,
                name,
                surname,
                patronymic,
            },
        );
    }

    static async fetchDeleteStudent(idUser: number): Promise<AxiosResponse> {
        return $api.delete(BackendApi.LOCATION + BackendApi.DELETE_USER + idUser);
    }
}
